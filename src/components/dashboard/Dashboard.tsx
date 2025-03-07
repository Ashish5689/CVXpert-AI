import React from "react";
import { useUser } from "@clerk/clerk-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { FileText, Plus, Settings, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome, {user?.firstName || user?.username || "there"}!</h1>
          <p className="text-muted-foreground">Manage your resumes and account settings</p>
        </div>
        <Button className="mt-4 md:mt-0" onClick={() => navigate('/templates')}>
          <Plus className="mr-2 h-4 w-4" /> Create New Resume
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Total Resumes</CardTitle>
            <CardDescription>Your created resumes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Downloads</CardTitle>
            <CardDescription>Resume downloads</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">AI Suggestions</CardTitle>
            <CardDescription>Content improvements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">24</div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4">Your Resumes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {[1, 2, 3].map((resume) => (
          <Card key={resume} className="overflow-hidden">
            <div className="aspect-[3/4] bg-gray-100 relative">
              <img
                src={`https://images.unsplash.com/photo-158628138034${resume}-632531db7ed4?w=500&q=80`}
                alt={`Resume ${resume}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold">Professional Resume {resume}</h3>
                  <p className="text-sm text-white/80">Last edited: {new Date().toLocaleDateString()}</p>
                </div>
              </div>
            </div>
            <div className="p-4 flex justify-between">
              <Button variant="ghost" size="sm">
                <FileText className="h-4 w-4 mr-2" /> Edit
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4 mr-2" /> Settings
              </Button>
            </div>
          </Card>
        ))}
        <Card className="border-dashed flex items-center justify-center aspect-[3/4]">
          <Button variant="ghost" className="flex flex-col h-auto py-8" onClick={() => navigate('/templates')}>
            <Plus className="h-12 w-12 mb-2" />
            <span>Create New Resume</span>
          </Button>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4">Account Settings</h2>
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Update your account information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                {user?.imageUrl ? (
                  <img src={user.imageUrl} alt="Profile" className="h-full w-full object-cover" />
                ) : (
                  <User className="h-12 w-12 text-gray-400" />
                )}
              </div>
            </div>
            <div className="flex-grow space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1">
                    Email
                  </label>
                  <div className="text-foreground">
                    {user?.emailAddresses[0]?.emailAddress || "No email provided"}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1">
                    Name
                  </label>
                  <div className="text-foreground">
                    {user?.fullName || user?.firstName || user?.username || "Not provided"}
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Button variant="outline">
                  <Settings className="mr-2 h-4 w-4" /> Manage Account
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard; 