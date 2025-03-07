import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';
import { Plus, Trash, Download, Save, ArrowLeft } from 'lucide-react';
import { ResumeTemplate } from '../templates/ResumeTemplates';
import html2pdf from 'html2pdf.js';
import { toast } from '../ui/use-toast';

// Define resume data structure
interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    website?: string;
    summary: string;
  };
  experience: Array<{
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
  }>;
  education: Array<{
    id: string;
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description?: string;
  }>;
  skills: Array<{
    id: string;
    name: string;
    level?: number;
  }>;
  projects?: Array<{
    id: string;
    name: string;
    description: string;
    url?: string;
    technologies?: string[];
  }>;
  certifications?: Array<{
    id: string;
    name: string;
    issuer: string;
    date: string;
    url?: string;
  }>;
  languages?: Array<{
    id: string;
    language: string;
    proficiency: string;
  }>;
}

// Initial resume data
const initialResumeData: ResumeData = {
  personalInfo: {
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    summary: '',
  },
  experience: [
    {
      id: '1',
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
    },
  ],
  education: [
    {
      id: '1',
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
    },
  ],
  skills: [
    { id: '1', name: '' },
    { id: '2', name: '' },
    { id: '3', name: '' },
  ],
  projects: [],
  certifications: [],
  languages: [],
};

// Generate unique ID
const generateId = () => Math.random().toString(36).substr(2, 9);

const ResumeEditor: React.FC = () => {
  const navigate = useNavigate();
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [selectedTemplate, setSelectedTemplate] = useState<ResumeTemplate | null>(null);
  const [activeTab, setActiveTab] = useState('personal');
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  // Load selected template from localStorage
  useEffect(() => {
    const templateData = localStorage.getItem('selectedTemplate');
    if (templateData) {
      setSelectedTemplate(JSON.parse(templateData));
    } else {
      // Redirect to template selection if no template is selected
      navigate('/templates');
    }

    // Load saved resume data if exists
    const savedResumeData = localStorage.getItem('resumeData');
    if (savedResumeData) {
      setResumeData(JSON.parse(savedResumeData));
    }
  }, [navigate]);

  // Save resume data
  const saveResumeData = () => {
    try {
      localStorage.setItem('resumeData', JSON.stringify(resumeData));
      toast({
        title: "Resume Saved",
        description: "Your resume has been saved successfully.",
        variant: "default",
      });
    } catch (error) {
      console.error('Error saving resume data:', error);
      toast({
        title: "Save Failed",
        description: "There was an error saving your resume. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Update personal info
  const updatePersonalInfo = (field: keyof ResumeData['personalInfo'], value: string) => {
    setResumeData({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        [field]: value,
      },
    });
  };

  // Add new experience
  const addExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [
        ...resumeData.experience,
        {
          id: generateId(),
          company: '',
          position: '',
          startDate: '',
          endDate: '',
          current: false,
          description: '',
        },
      ],
    });
  };

  // Update experience
  const updateExperience = (id: string, field: string, value: string | boolean) => {
    setResumeData({
      ...resumeData,
      experience: resumeData.experience.map(exp => 
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    });
  };

  // Remove experience
  const removeExperience = (id: string) => {
    setResumeData({
      ...resumeData,
      experience: resumeData.experience.filter(exp => exp.id !== id),
    });
  };

  // Add new education
  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [
        ...resumeData.education,
        {
          id: generateId(),
          institution: '',
          degree: '',
          field: '',
          startDate: '',
          endDate: '',
          current: false,
          description: '',
        },
      ],
    });
  };

  // Update education
  const updateEducation = (id: string, field: string, value: string | boolean) => {
    setResumeData({
      ...resumeData,
      education: resumeData.education.map(edu => 
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    });
  };

  // Remove education
  const removeEducation = (id: string) => {
    setResumeData({
      ...resumeData,
      education: resumeData.education.filter(edu => edu.id !== id),
    });
  };

  // Add new skill
  const addSkill = () => {
    setResumeData({
      ...resumeData,
      skills: [
        ...resumeData.skills,
        {
          id: generateId(),
          name: '',
        },
      ],
    });
  };

  // Update skill
  const updateSkill = (id: string, value: string) => {
    setResumeData({
      ...resumeData,
      skills: resumeData.skills.map(skill => 
        skill.id === id ? { ...skill, name: value } : skill
      ),
    });
  };

  // Remove skill
  const removeSkill = (id: string) => {
    setResumeData({
      ...resumeData,
      skills: resumeData.skills.filter(skill => skill.id !== id),
    });
  };

  // Generate and download PDF
  const handleDownloadPDF = async () => {
    if (!resumeRef.current) return;
    
    try {
      setIsGeneratingPdf(true);
      
      // Configure PDF options
      const options = {
        margin: [10, 10, 10, 10],
        filename: `${resumeData.personalInfo.name || 'Resume'}_${new Date().toISOString().split('T')[0]}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };
      
      // Generate PDF
      const content = resumeRef.current;
      
      // Create a clone of the resume element to modify for PDF
      const clonedContent = content.cloneNode(true) as HTMLElement;
      
      // Apply print-specific styles
      clonedContent.style.width = '210mm'; // A4 width
      clonedContent.style.height = 'auto';
      clonedContent.style.padding = '15mm';
      clonedContent.style.boxSizing = 'border-box';
      
      // Generate PDF from the cloned content
      await html2pdf().from(clonedContent).set(options).save();
      
      // Show success message
      toast({
        title: "PDF Generated Successfully",
        description: "Your resume has been downloaded as a PDF file.",
        variant: "default",
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast({
        title: "PDF Generation Failed",
        description: "There was an error generating your PDF. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <Button variant="ghost" onClick={() => navigate('/templates')} className="mr-2">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Templates
            </Button>
            <h1 className="text-2xl font-bold">
              {selectedTemplate ? `Editing: ${selectedTemplate.name} Resume` : 'Resume Editor'}
            </h1>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" onClick={saveResumeData}>
              <Save className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button 
              onClick={handleDownloadPDF} 
              disabled={isGeneratingPdf || !selectedTemplate}
            >
              <Download className="h-4 w-4 mr-2" />
              {isGeneratingPdf ? 'Generating...' : 'Download PDF'}
            </Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Editor Panel */}
          <div className="w-full lg:w-1/2">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>

              {/* Personal Info Tab */}
              <TabsContent value="personal">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Full Name</label>
                      <Input 
                        value={resumeData.personalInfo.name} 
                        onChange={(e) => updatePersonalInfo('name', e.target.value)}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Professional Title</label>
                      <Input 
                        value={resumeData.personalInfo.title} 
                        onChange={(e) => updatePersonalInfo('title', e.target.value)}
                        placeholder="Software Engineer"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <Input 
                          type="email"
                          value={resumeData.personalInfo.email} 
                          onChange={(e) => updatePersonalInfo('email', e.target.value)}
                          placeholder="john.doe@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Phone</label>
                        <Input 
                          value={resumeData.personalInfo.phone} 
                          onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Location</label>
                        <Input 
                          value={resumeData.personalInfo.location} 
                          onChange={(e) => updatePersonalInfo('location', e.target.value)}
                          placeholder="New York, NY"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Website (Optional)</label>
                        <Input 
                          value={resumeData.personalInfo.website || ''} 
                          onChange={(e) => updatePersonalInfo('website', e.target.value)}
                          placeholder="https://johndoe.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Professional Summary</label>
                      <Textarea 
                        value={resumeData.personalInfo.summary} 
                        onChange={(e) => updatePersonalInfo('summary', e.target.value)}
                        placeholder="Experienced software engineer with a passion for..."
                        rows={4}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Experience Tab */}
              <TabsContent value="experience">
                <div className="space-y-6">
                  {resumeData.experience.map((exp, index) => (
                    <Card key={exp.id}>
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-lg">Experience {index + 1}</CardTitle>
                        {resumeData.experience.length > 1 && (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => removeExperience(exp.id)}
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        )}
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Company</label>
                          <Input 
                            value={exp.company} 
                            onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                            placeholder="Company Name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Position</label>
                          <Input 
                            value={exp.position} 
                            onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                            placeholder="Job Title"
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-1">Start Date</label>
                            <Input 
                              type="month"
                              value={exp.startDate} 
                              onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">End Date</label>
                            <Input 
                              type="month"
                              value={exp.endDate} 
                              onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                              disabled={exp.current}
                            />
                          </div>
                        </div>
                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            id={`current-job-${exp.id}`}
                            checked={exp.current}
                            onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
                            className="mr-2"
                          />
                          <label htmlFor={`current-job-${exp.id}`}>I currently work here</label>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Description</label>
                          <Textarea 
                            value={exp.description} 
                            onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                            placeholder="Describe your responsibilities and achievements..."
                            rows={4}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  <Button onClick={addExperience} variant="outline" className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Experience
                  </Button>
                </div>
              </TabsContent>

              {/* Education Tab */}
              <TabsContent value="education">
                <div className="space-y-6">
                  {resumeData.education.map((edu, index) => (
                    <Card key={edu.id}>
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-lg">Education {index + 1}</CardTitle>
                        {resumeData.education.length > 1 && (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => removeEducation(edu.id)}
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        )}
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Institution</label>
                          <Input 
                            value={edu.institution} 
                            onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                            placeholder="University Name"
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-1">Degree</label>
                            <Input 
                              value={edu.degree} 
                              onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                              placeholder="Bachelor's, Master's, etc."
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Field of Study</label>
                            <Input 
                              value={edu.field} 
                              onChange={(e) => updateEducation(edu.id, 'field', e.target.value)}
                              placeholder="Computer Science, Business, etc."
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-1">Start Date</label>
                            <Input 
                              type="month"
                              value={edu.startDate} 
                              onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">End Date</label>
                            <Input 
                              type="month"
                              value={edu.endDate} 
                              onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                              disabled={edu.current}
                            />
                          </div>
                        </div>
                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            id={`current-edu-${edu.id}`}
                            checked={edu.current}
                            onChange={(e) => updateEducation(edu.id, 'current', e.target.checked)}
                            className="mr-2"
                          />
                          <label htmlFor={`current-edu-${edu.id}`}>I'm currently studying here</label>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Description (Optional)</label>
                          <Textarea 
                            value={edu.description || ''} 
                            onChange={(e) => updateEducation(edu.id, 'description', e.target.value)}
                            placeholder="Additional information about your education..."
                            rows={3}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  <Button onClick={addEducation} variant="outline" className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Education
                  </Button>
                </div>
              </TabsContent>

              {/* Skills Tab */}
              <TabsContent value="skills">
                <Card>
                  <CardHeader>
                    <CardTitle>Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {resumeData.skills.map((skill) => (
                        <div key={skill.id} className="flex items-center gap-2">
                          <Input 
                            value={skill.name} 
                            onChange={(e) => updateSkill(skill.id, e.target.value)}
                            placeholder="Skill (e.g., JavaScript, Project Management)"
                            className="flex-grow"
                          />
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => removeSkill(skill.id)}
                            disabled={resumeData.skills.length <= 1}
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                      <Button onClick={addSkill} variant="outline" className="w-full mt-2">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Skill
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Preview Panel */}
          <div className="w-full lg:w-1/2 bg-white border rounded-lg shadow-sm p-8">
            <div className="aspect-[8.5/11] bg-white border shadow-sm mx-auto overflow-hidden">
              {selectedTemplate ? (
                <div 
                  ref={resumeRef}
                  className="p-8 h-full"
                  style={{ 
                    backgroundColor: selectedTemplate.colors.background,
                    color: selectedTemplate.colors.text,
                  }}
                >
                  <h1 
                    className="text-3xl font-bold mb-1"
                    style={{ color: selectedTemplate.colors.primary }}
                  >
                    {resumeData.personalInfo.name || 'Your Name'}
                  </h1>
                  <p className="text-lg mb-4">{resumeData.personalInfo.title || 'Professional Title'}</p>
                  
                  <div className="flex flex-wrap gap-2 text-sm mb-4">
                    {resumeData.personalInfo.email && (
                      <span className="mr-3">{resumeData.personalInfo.email}</span>
                    )}
                    {resumeData.personalInfo.phone && (
                      <span className="mr-3">{resumeData.personalInfo.phone}</span>
                    )}
                    {resumeData.personalInfo.location && (
                      <span>{resumeData.personalInfo.location}</span>
                    )}
                  </div>
                  
                  {resumeData.personalInfo.summary && (
                    <div className="mb-6">
                      <h2 
                        className="text-lg font-semibold mb-2"
                        style={{ color: selectedTemplate.colors.primary }}
                      >
                        Summary
                      </h2>
                      <p className="text-sm">{resumeData.personalInfo.summary}</p>
                    </div>
                  )}
                  
                  {resumeData.experience.length > 0 && resumeData.experience[0].company && (
                    <div className="mb-6">
                      <h2 
                        className="text-lg font-semibold mb-2"
                        style={{ color: selectedTemplate.colors.primary }}
                      >
                        Experience
                      </h2>
                      <div className="space-y-4">
                        {resumeData.experience.map((exp) => (
                          exp.company && (
                            <div key={exp.id}>
                              <h3 className="font-medium">{exp.position}</h3>
                              <div className="flex justify-between text-sm">
                                <span>{exp.company}</span>
                                <span>
                                  {exp.startDate && `${exp.startDate} - ${exp.current ? 'Present' : exp.endDate}`}
                                </span>
                              </div>
                              <p className="text-sm mt-1">{exp.description}</p>
                            </div>
                          )
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {resumeData.education.length > 0 && resumeData.education[0].institution && (
                    <div className="mb-6">
                      <h2 
                        className="text-lg font-semibold mb-2"
                        style={{ color: selectedTemplate.colors.primary }}
                      >
                        Education
                      </h2>
                      <div className="space-y-4">
                        {resumeData.education.map((edu) => (
                          edu.institution && (
                            <div key={edu.id}>
                              <h3 className="font-medium">{edu.degree} {edu.field && `in ${edu.field}`}</h3>
                              <div className="flex justify-between text-sm">
                                <span>{edu.institution}</span>
                                <span>
                                  {edu.startDate && `${edu.startDate} - ${edu.current ? 'Present' : edu.endDate}`}
                                </span>
                              </div>
                              {edu.description && <p className="text-sm mt-1">{edu.description}</p>}
                            </div>
                          )
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {resumeData.skills.length > 0 && resumeData.skills[0].name && (
                    <div>
                      <h2 
                        className="text-lg font-semibold mb-2"
                        style={{ color: selectedTemplate.colors.primary }}
                      >
                        Skills
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        {resumeData.skills.map((skill) => (
                          skill.name && (
                            <span 
                              key={skill.id}
                              className="px-2 py-1 text-sm rounded"
                              style={{ 
                                backgroundColor: selectedTemplate.colors.accent + '20',
                                color: selectedTemplate.colors.primary
                              }}
                            >
                              {skill.name}
                            </span>
                          )
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-muted-foreground">Select a template to preview your resume</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeEditor; 