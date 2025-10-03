import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useState } from "react";
import { Upload, Image as ImageIcon, Video, Calendar as CalendarIcon, Instagram, Twitter, Facebook, Linkedin, X } from "lucide-react";

const platforms = [
  { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'from-purple-500 to-pink-500' },
  { id: 'twitter', name: 'Twitter', icon: Twitter, color: 'from-blue-400 to-blue-600' },
  { id: 'facebook', name: 'Facebook', icon: Facebook, color: 'from-blue-600 to-blue-800' },
  { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, color: 'from-blue-700 to-blue-900' },
];

export function CreatePostView() {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['instagram']);
  const [caption, setCaption] = useState('');
  const [scheduleDate, setScheduleDate] = useState<Date>();
  const [scheduleTime, setScheduleTime] = useState('10:00');

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms(prev =>
      prev.includes(platformId)
        ? prev.filter(id => id !== platformId)
        : [...prev, platformId]
    );
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-foreground">Create Post</h1>
        <p className="text-muted-foreground mt-1">Compose and schedule your social media content.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Composer */}
        <div className="lg:col-span-2 space-y-6">
          {/* Media Upload */}
          <Card className="p-6 bg-card border-border">
            <h3 className="mb-4 text-foreground">Media</h3>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-purple-400 transition-colors cursor-pointer">
              <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-foreground mb-2">Drag and drop your media here</p>
              <p className="text-sm text-muted-foreground mb-4">or click to browse</p>
              <div className="flex gap-2 justify-center">
                <Button variant="outline" size="sm">
                  <ImageIcon className="w-4 h-4 mr-2" />
                  Image
                </Button>
                <Button variant="outline" size="sm">
                  <Video className="w-4 h-4 mr-2" />
                  Video
                </Button>
              </div>
            </div>
          </Card>

          {/* Caption */}
          <Card className="p-6 bg-card border-border">
            <h3 className="mb-4 text-foreground">Caption</h3>
            <Textarea
              placeholder="Write your caption here..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="min-h-32 resize-none"
            />
            <div className="flex items-center justify-between mt-3">
              <p className="text-sm text-muted-foreground">{caption.length} characters</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Add Emoji</Button>
                <Button variant="outline" size="sm">Add Hashtag</Button>
              </div>
            </div>
          </Card>

          {/* Platform-Specific Settings */}
          <Card className="p-6 bg-card border-border">
            <h3 className="mb-4 text-foreground">Platform Customization</h3>
            <div className="space-y-4">
              {selectedPlatforms.map(platformId => {
                const platform = platforms.find(p => p.id === platformId);
                if (!platform) return null;
                const Icon = platform.icon;
                return (
                  <div key={platformId} className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${platform.color} flex items-center justify-center`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-foreground">{platform.name}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm text-foreground">First comment</Label>
                        <Switch />
                      </div>
                      {platformId === 'instagram' && (
                        <div className="flex items-center justify-between">
                          <Label className="text-sm text-foreground">Add to story</Label>
                          <Switch />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Platform Selection */}
          <Card className="p-6 bg-card border-border">
            <h3 className="mb-4 text-foreground">Platforms</h3>
            <div className="space-y-2">
              {platforms.map(platform => {
                const Icon = platform.icon;
                const isSelected = selectedPlatforms.includes(platform.id);
                return (
                  <button
                    key={platform.id}
                    onClick={() => togglePlatform(platform.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                      isSelected
                        ? 'bg-purple-500/20 border-2 border-purple-400'
                        : 'bg-muted border-2 border-transparent hover:border-border'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${platform.color} flex items-center justify-center`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm text-foreground">{platform.name}</span>
                    </div>
                    {isSelected && (
                      <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </Card>

          {/* Scheduling */}
          <Card className="p-6 bg-card border-border">
            <h3 className="mb-4 text-foreground">Schedule</h3>
            <div className="space-y-4">
              <div>
                <Label className="text-sm mb-2 block text-foreground">Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {scheduleDate ? scheduleDate.toLocaleDateString() : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={scheduleDate}
                      onSelect={setScheduleDate}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <Label className="text-sm mb-2 block text-foreground">Time</Label>
                <input
                  type="time"
                  value={scheduleTime}
                  onChange={(e) => setScheduleTime(e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-background text-foreground"
                />
              </div>
            </div>
          </Card>

          {/* Actions */}
          <div className="space-y-2">
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              Schedule Post
            </Button>
            <Button variant="outline" className="w-full">
              Save as Draft
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
