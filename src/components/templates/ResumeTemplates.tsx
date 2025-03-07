import React from 'react';

// Define the structure for resume templates
export interface ResumeTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  imageSrc: string;
  layout: 'standard' | 'modern' | 'creative' | 'minimal' | 'professional' | 'academic';
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    accent: string;
  };
}

// Define the resume templates
export const resumeTemplates: ResumeTemplate[] = [
  {
    id: 'professional-classic',
    name: 'Professional Classic',
    description: 'A timeless professional template with a clean layout, perfect for corporate roles.',
    category: 'Business',
    imageSrc: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=500&q=80',
    layout: 'standard',
    colors: {
      primary: '#1a365d',
      secondary: '#2a4365',
      background: '#ffffff',
      text: '#1a202c',
      accent: '#3182ce',
    },
  },
  {
    id: 'modern-minimal',
    name: 'Modern Minimal',
    description: 'A sleek, minimalist design with ample white space for a contemporary look.',
    category: 'General',
    imageSrc: 'https://images.unsplash.com/photo-1586282391129-76a6df230234?w=500&q=80',
    layout: 'minimal',
    colors: {
      primary: '#2d3748',
      secondary: '#4a5568',
      background: '#ffffff',
      text: '#1a202c',
      accent: '#38b2ac',
    },
  },
  {
    id: 'creative-bold',
    name: 'Creative Bold',
    description: 'Stand out with this bold design featuring unique layouts for creative industries.',
    category: 'Creative',
    imageSrc: 'https://images.unsplash.com/photo-1586282023358-9bfaa12d8a9b?w=500&q=80',
    layout: 'creative',
    colors: {
      primary: '#6b46c1',
      secondary: '#805ad5',
      background: '#ffffff',
      text: '#2d3748',
      accent: '#d53f8c',
    },
  },
  {
    id: 'tech-focused',
    name: 'Tech Focused',
    description: 'Highlight your technical skills with this specialized layout for IT professionals.',
    category: 'IT',
    imageSrc: 'https://images.unsplash.com/photo-1586282391463-44d6ce0f1d1e?w=500&q=80',
    layout: 'modern',
    colors: {
      primary: '#2c5282',
      secondary: '#3182ce',
      background: '#ffffff',
      text: '#1a202c',
      accent: '#4299e1',
    },
  },
  {
    id: 'academic-professional',
    name: 'Academic Professional',
    description: 'Designed for academic positions with sections for publications and research.',
    category: 'Academic',
    imageSrc: 'https://images.unsplash.com/photo-1586282023555-8c1f8b7faac4?w=500&q=80',
    layout: 'academic',
    colors: {
      primary: '#744210',
      secondary: '#975a16',
      background: '#ffffff',
      text: '#1a202c',
      accent: '#d69e2e',
    },
  },
  {
    id: 'executive-premium',
    name: 'Executive Premium',
    description: 'A sophisticated design for senior management and executive positions.',
    category: 'Executive',
    imageSrc: 'https://images.unsplash.com/photo-1586282023692-6accfcf40d1e?w=500&q=80',
    layout: 'professional',
    colors: {
      primary: '#1a202c',
      secondary: '#2d3748',
      background: '#ffffff',
      text: '#1a202c',
      accent: '#718096',
    },
  },
];

// Template preview component
interface TemplatePreviewProps {
  template: ResumeTemplate;
  onSelect: (template: ResumeTemplate) => void;
}

export const TemplatePreview: React.FC<TemplatePreviewProps> = ({ template, onSelect }) => {
  return (
    <div 
      className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      onClick={() => onSelect(template)}
    >
      <div className="aspect-[3/4] relative overflow-hidden">
        <img 
          src={template.imageSrc} 
          alt={template.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            // Fallback image if the template image fails to load
            e.currentTarget.src = "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=500&q=80";
          }}
        />
        <div 
          className="absolute top-2 right-2 text-xs px-2 py-1 rounded-full"
          style={{ backgroundColor: template.colors.primary, color: '#ffffff' }}
        >
          {template.category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{template.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{template.description}</p>
        <button 
          className="w-full py-2 rounded-md text-white font-medium transition-colors hover:opacity-90"
          style={{ 
            backgroundColor: template.colors.primary
          }}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(template);
          }}
        >
          Use Template
        </button>
      </div>
    </div>
  );
};

// Template gallery component
interface TemplateGalleryProps {
  onSelectTemplate: (template: ResumeTemplate) => void;
  filter?: string;
}

export const TemplateGallery: React.FC<TemplateGalleryProps> = ({ 
  onSelectTemplate,
  filter
}) => {
  // Filter templates based on category if filter is provided
  const filteredTemplates = filter 
    ? resumeTemplates.filter(t => t.category.toLowerCase() === filter.toLowerCase())
    : resumeTemplates;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredTemplates.map(template => (
        <TemplatePreview 
          key={template.id} 
          template={template} 
          onSelect={onSelectTemplate} 
        />
      ))}
    </div>
  );
}; 