"use client";
import { useState } from "react";
import {
  Bell,
  Settings,
  User,
  Play,
  Pause,
  Volume2,
  Upload,
  Clock,
  ChevronRight,
  AlertTriangle,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Dummy data
const DUMMY_DATA = {
  babyName: "Alex",
  currentState: "calm",
  alerts: [
    {
      title: "Crying Detected",
      description: "Baby started crying 2 minutes ago. Duration: 2m 15s",
    },
    {
      title: "Movement Detected",
      description: "Unusual movement detected in the crib area",
    },
  ],
  audioLibrary: ["Parent Voices", "Lullabies", "White Noise"],
  soothing: ["Lullaby 1", "Mom's Voice", "White Noise", "Dad's Voice"],
  analytics: {
    cryingTime: "45 mins",
    peakActivity: "2:30 PM",
    calmPeriods: "4 hours",
  },
};

const BabyMonitorDashboard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentState, setCurrentState] = useState(DUMMY_DATA.currentState);
  const [volume, setVolume] = useState(50);

  const getStateColor = (state) => {
    const colors = {
      crying: "bg-red-100",
      laughing: "bg-green-100",
      calm: "bg-blue-100",
    };
    return colors[state] || "bg-gray-100";
  };

  const AnalyticsCard = ({ icon: Icon, title, value, color }) => (
    <div className="p-4 bg-gray-50 rounded-lg">
      <Icon className={`h-6 w-6 ${color} mb-2`} />
      <h4 className="font-medium text-gray-800">{title}</h4>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">
            {DUMMY_DATA.babyName}'s Monitor
          </h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <Bell className="h-6 w-6 text-gray-600" />
              <span className="absolute top-1 right-1 h-3 w-3 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Settings className="h-6 w-6 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Status Panel */}
        <div className={`rounded-lg p-6 mb-8 ${getStateColor(currentState)}`}>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Current Status
              </h2>
              <p className="text-4xl font-bold mt-2 text-gray-900 capitalize">
                {currentState}
              </p>
              <p className="text-sm text-gray-600 mt-1">Duration: 5 minutes</p>
            </div>
            <div className="bg-black/10 rounded-lg p-4 w-64 h-48 flex items-center justify-center">
              <img
                src="/api/placeholder/256/192"
                alt="Video Feed"
                className="rounded"
              />
            </div>
          </div>
        </div>

        {/* Control Center */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Soothing Controls */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Soothing Controls</h3>
            <div className="flex items-center space-x-4 mb-6">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="h-6 w-6" />
                ) : (
                  <Play className="h-6 w-6" />
                )}
              </button>
              <div className="flex-1">
                <Volume2 className="h-5 w-5 text-gray-600 mb-2" />
                <input
                  type="range"
                  className="w-full"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {DUMMY_DATA.soothing.map((audio, index) => (
                <button
                  key={index}
                  className="p-3 border rounded-lg hover:bg-gray-50 flex items-center justify-between transition-colors"
                >
                  <span>{audio}</span>
                  <Play className="h-4 w-4 text-gray-600" />
                </button>
              ))}
            </div>
          </div>

          {/* Audio Library */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Audio Library</h3>
            <button className="w-full p-4 border-2 border-dashed rounded-lg text-gray-600 hover:bg-gray-50 mb-4 flex items-center justify-center transition-colors">
              <Upload className="h-5 w-5 mr-2" />
              Upload New Audio
            </button>
            <div className="space-y-3">
              {DUMMY_DATA.audioLibrary.map((category, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                >
                  <span className="font-medium">{category}</span>
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Analytics Panel */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
          <h3 className="text-lg font-semibold mb-4">Today's Activity</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnalyticsCard
              icon={Clock}
              title="Total Crying Time"
              value={DUMMY_DATA.analytics.cryingTime}
              color="text-blue-500"
            />
            <AnalyticsCard
              icon={AlertTriangle}
              title="Peak Activity"
              value={DUMMY_DATA.analytics.peakActivity}
              color="text-yellow-500"
            />
            <AnalyticsCard
              icon={Volume2}
              title="Calm Periods"
              value={DUMMY_DATA.analytics.calmPeriods}
              color="text-green-500"
            />
          </div>
        </div>

        {/* Recent Alerts */}
        <div className="space-y-4">
          {DUMMY_DATA.alerts.map((alert, index) => (
            <Alert key={index}>
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>{alert.title}</AlertTitle>
              <AlertDescription>{alert.description}</AlertDescription>
            </Alert>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BabyMonitorDashboard;
