import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { TemplateGallery, ResumeTemplate } from './ResumeTemplates';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';

const TemplateSelectionPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  
  const categories = [
    { id: 'all', name: 'All Templates' },
    { id: 'business', name: 'Business' },
    { id: 'creative', name: 'Creative' },
    { id: 'it', name: 'IT' },
    { id: 'academic', name: 'Academic' },
    { id: 'executive', name: 'Executive' },
    { id: 'general', name: 'General' },
  ];

  const handleSelectTemplate = (template: ResumeTemplate) => {
    // Store the selected template in localStorage or state management
    localStorage.setItem('selectedTemplate', JSON.stringify(template));
    
    // Navigate to the resume editor
    navigate('/resume/editor');
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Resume Templates
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Choose from our collection of professionally designed templates to create your perfect resume.
          </p>
          
          <Tabs defaultValue="all" onValueChange={(value) => setSelectedCategory(value === 'all' ? undefined : value)}>
            <TabsList className="mb-8">
              {categories.map(category => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {categories.map(category => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <TemplateGallery 
                  onSelectTemplate={handleSelectTemplate} 
                  filter={category.id === 'all' ? undefined : category.name}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            We offer custom template designs tailored to your specific needs.
          </p>
          <Button size="lg">
            Request Custom Template
          </Button>
        </div>
      </section>
    </div>
  );
};

export default TemplateSelectionPage; 