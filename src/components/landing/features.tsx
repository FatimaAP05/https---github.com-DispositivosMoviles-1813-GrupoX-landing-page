'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import {
  Bell,
  CalendarDays,
  HeartPulse,
  MessageSquare,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const features = [
  {
    icon: <MessageSquare className="w-8 h-8 text-primary" />,
    title: 'Real-time Communication',
    description:
      'Engage in secure, real-time messaging and video calls with care center staff and loved ones, keeping everyone connected.',
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-primary" />,
    title: 'Resident Monitoring',
    description:
      'Monitor resident well-being with simulated sensor data, providing insights into daily activities and health trends.',
    content: <ActivityChart />,
  },
  {
    icon: <Bell className="w-8 h-8 text-primary" />,
    title: 'Notification System',
    description:
      'Receive instant alerts for medication schedules, appointments, and important events to stay informed and proactive.',
  },
  {
    icon: <CalendarDays className="w-8 h-8 text-primary" />,
    title: 'Appointment Scheduling',
    description:
      'Easily schedule and manage medical appointments, social activities, and family visits through an intuitive shared calendar.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-accent/30">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Everything You Need for Peace of Mind
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our platform is packed with features designed to improve communication, streamline care, and provide transparency.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {features.map((feature) => (
            <Card key={feature.title} className="flex flex-col">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-accent">
                  {feature.icon}
                </div>
                <CardTitle className="font-headline">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              {feature.content && <CardContent className="flex-1 flex flex-col justify-end">{feature.content}</CardContent>}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ActivityChart() {
  const data = [
    { day: 'Mon', activity: Math.floor(Math.random() * 100) + 50 },
    { day: 'Tue', activity: Math.floor(Math.random() * 100) + 50 },
    { day: 'Wed', activity: Math.floor(Math.random() * 100) + 50 },
    { day: 'Thu', activity: Math.floor(Math.random() * 100) + 50 },
    { day: 'Fri', activity: Math.floor(Math.random() * 100) + 50 },
    { day: 'Sat', activity: Math.floor(Math.random() * 100) + 50 },
    { day: 'Sun', activity: Math.floor(Math.random() * 100) + 50 },
  ];

  return (
    <div className="h-[150px] w-full pt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis
            dataKey="day"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
          />
          <Bar
            dataKey="activity"
            fill="hsl(var(--primary))"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
