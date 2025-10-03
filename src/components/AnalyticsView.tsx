import { Card } from "./ui/card";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Users, Heart, MessageCircle } from "lucide-react";

const engagementData = [
  { date: 'Jan 1', likes: 245, comments: 42, shares: 18 },
  { date: 'Jan 8', likes: 312, comments: 58, shares: 24 },
  { date: 'Jan 15', likes: 289, comments: 51, shares: 21 },
  { date: 'Jan 22', likes: 378, comments: 72, shares: 31 },
  { date: 'Jan 29', likes: 421, comments: 88, shares: 38 },
  { date: 'Feb 5', likes: 395, comments: 76, shares: 34 },
  { date: 'Feb 12', likes: 468, comments: 94, shares: 42 },
];

const followerGrowth = [
  { date: 'Week 1', followers: 12400 },
  { date: 'Week 2', followers: 13200 },
  { date: 'Week 3', followers: 14100 },
  { date: 'Week 4', followers: 15300 },
  { date: 'Week 5', followers: 16800 },
  { date: 'Week 6', followers: 18200 },
];

const platformDistribution = [
  { name: 'Instagram', value: 42, color: '#E4405F' },
  { name: 'Twitter', value: 28, color: '#1DA1F2' },
  { name: 'Facebook', value: 18, color: '#4267B2' },
  { name: 'LinkedIn', value: 12, color: '#0077B5' },
];

const topPosts = [
  { id: 1, title: 'Summer Product Launch', engagement: 2847, platform: 'Instagram', type: 'Image' },
  { id: 2, title: 'Customer Success Story', engagement: 1923, platform: 'LinkedIn', type: 'Article' },
  { id: 3, title: 'Behind the Scenes', engagement: 1654, platform: 'Facebook', type: 'Video' },
  { id: 4, title: 'Industry Insights', engagement: 1432, platform: 'Twitter', type: 'Thread' },
];

export function AnalyticsView() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-foreground">Analytics</h1>
          <p className="text-muted-foreground mt-1">Track your social media performance.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-sm bg-card border border-border rounded-lg hover:bg-muted text-foreground">
            Last 7 days
          </button>
          <button className="px-4 py-2 text-sm bg-card border border-border rounded-lg hover:bg-muted text-foreground">
            Last 30 days
          </button>
          <button className="px-4 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            Custom Range
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6 bg-card border-border">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Engagement</p>
              <p className="text-2xl mt-2 text-foreground">8,742</p>
              <p className="text-sm text-green-400 mt-1">+23.4% this week</p>
            </div>
            <div className="p-3 rounded-lg bg-purple-500/20">
              <TrendingUp className="w-5 h-5 text-purple-400" />
            </div>
          </div>
        </Card>
        <Card className="p-6 bg-card border-border">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground">New Followers</p>
              <p className="text-2xl mt-2 text-foreground">1,284</p>
              <p className="text-sm text-green-400 mt-1">+18.2% this week</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-500/20">
              <Users className="w-5 h-5 text-blue-400" />
            </div>
          </div>
        </Card>
        <Card className="p-6 bg-card border-border">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Avg. Likes</p>
              <p className="text-2xl mt-2 text-foreground">387</p>
              <p className="text-sm text-green-400 mt-1">+15.8% this week</p>
            </div>
            <div className="p-3 rounded-lg bg-pink-500/20">
              <Heart className="w-5 h-5 text-pink-400" />
            </div>
          </div>
        </Card>
        <Card className="p-6 bg-card border-border">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Avg. Comments</p>
              <p className="text-2xl mt-2 text-foreground">72</p>
              <p className="text-sm text-green-400 mt-1">+28.1% this week</p>
            </div>
            <div className="p-3 rounded-lg bg-green-500/20">
              <MessageCircle className="w-5 h-5 text-green-400" />
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Engagement Over Time */}
        <Card className="p-6 lg:col-span-2 bg-card border-border">
          <h3 className="mb-4 text-foreground">Engagement Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="date" stroke="#999" />
              <YAxis stroke="#999" />
              <Tooltip contentStyle={{ backgroundColor: '#1f1f1f', border: '1px solid #333' }} />
              <Line type="monotone" dataKey="likes" stroke="#a78bfa" strokeWidth={2} />
              <Line type="monotone" dataKey="comments" stroke="#fb7185" strokeWidth={2} />
              <Line type="monotone" dataKey="shares" stroke="#60a5fa" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex gap-6 mt-4 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
              <span className="text-sm text-muted-foreground">Likes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
              <span className="text-sm text-muted-foreground">Comments</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span className="text-sm text-muted-foreground">Shares</span>
            </div>
          </div>
        </Card>

        {/* Platform Distribution */}
        <Card className="p-6 bg-card border-border">
          <h3 className="mb-4 text-foreground">Platform Share</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={platformDistribution}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {platformDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#1f1f1f', border: '1px solid #333' }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-4">
            {platformDistribution.map((platform) => (
              <div key={platform.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: platform.color }}></div>
                  <span className="text-sm text-foreground">{platform.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">{platform.value}%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Follower Growth */}
      <Card className="p-6 bg-card border-border">
        <h3 className="mb-4 text-foreground">Follower Growth</h3>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={followerGrowth}>
            <defs>
              <linearGradient id="colorFollowers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#60a5fa" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="date" stroke="#999" />
            <YAxis stroke="#999" />
            <Tooltip contentStyle={{ backgroundColor: '#1f1f1f', border: '1px solid #333' }} />
            <Area type="monotone" dataKey="followers" stroke="#60a5fa" fillOpacity={1} fill="url(#colorFollowers)" />
          </AreaChart>
        </ResponsiveContainer>
      </Card>

      {/* Top Performing Posts */}
      <Card className="p-6 bg-card border-border">
        <h3 className="mb-4 text-foreground">Top Performing Posts</h3>
        <div className="space-y-3">
          {topPosts.map((post, index) => (
            <div key={post.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">#{index + 1}</span>
                </div>
                <div>
                  <p className="text-foreground">{post.title}</p>
                  <p className="text-sm text-muted-foreground">{post.platform} • {post.type}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-foreground">{post.engagement.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">engagements</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
