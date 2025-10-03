import { Calendar } from "./ui/calendar";
import { Card } from "./ui/card";
import { useState } from "react";
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

const scheduledPosts = [
  { id: 1, date: new Date(2025, 9, 5), title: 'Fall Collection Launch', platform: 'instagram', time: '10:00 AM' },
  { id: 2, date: new Date(2025, 9, 5), title: 'Industry Update', platform: 'linkedin', time: '2:00 PM' },
  { id: 3, date: new Date(2025, 9, 7), title: 'Weekend Vibes', platform: 'facebook', time: '9:00 AM' },
  { id: 4, date: new Date(2025, 9, 10), title: 'Product Tips', platform: 'twitter', time: '11:30 AM' },
  { id: 5, date: new Date(2025, 9, 12), title: 'Customer Spotlight', platform: 'instagram', time: '3:00 PM' },
];

const platformIcons = {
  instagram: Instagram,
  twitter: Twitter,
  facebook: Facebook,
  linkedin: Linkedin,
};

const platformColors = {
  instagram: 'from-purple-500 to-pink-500',
  twitter: 'from-blue-400 to-blue-600',
  facebook: 'from-blue-600 to-blue-800',
  linkedin: 'from-blue-700 to-blue-900',
};

export function CalendarView() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const postsForSelectedDate = scheduledPosts.filter(
    post => selectedDate && post.date.toDateString() === selectedDate.toDateString()
  );

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-foreground">Content Calendar</h1>
        <p className="text-muted-foreground mt-1">Plan and schedule your social media posts.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <Card className="p-6 lg:col-span-2 bg-card border-border">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md"
          />
        </Card>

        {/* Scheduled Posts for Selected Date */}
        <Card className="p-6 bg-card border-border">
          <h3 className="mb-4 text-foreground">
            {selectedDate ? selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' }) : 'Select a date'}
          </h3>
          <div className="space-y-3">
            {postsForSelectedDate.length > 0 ? (
              postsForSelectedDate.map((post) => {
                const Icon = platformIcons[post.platform as keyof typeof platformIcons];
                const gradient = platformColors[post.platform as keyof typeof platformColors];
                return (
                  <div key={post.id} className="p-3 bg-muted rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-foreground">{post.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{post.time}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-sm text-muted-foreground text-center py-8">No posts scheduled for this date</p>
            )}
          </div>
        </Card>
      </div>

      {/* All Upcoming Posts */}
      <Card className="p-6 mt-6 bg-card border-border">
        <h3 className="mb-4 text-foreground">Upcoming Posts</h3>
        <div className="space-y-3">
          {scheduledPosts.sort((a, b) => a.date.getTime() - b.date.getTime()).map((post) => {
            const Icon = platformIcons[post.platform as keyof typeof platformIcons];
            const gradient = platformColors[post.platform as keyof typeof platformColors];
            return (
              <div key={post.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-foreground">{post.title}</p>
                    <p className="text-sm text-muted-foreground capitalize">{post.platform}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-foreground">{post.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                  <p className="text-sm text-muted-foreground">{post.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
