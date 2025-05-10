import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

export default function ConfidenceDashboard() {
  const recommendations = [
    { rank: 1, title: 'Pricing Clarity Messaging', source: 'Gong', confidence: 92, wins: 48, attempts: 52 },
    { rank: 2, title: 'ICP: SaaS Companies (100-500)', source: 'Salesforce', confidence: 89, wins: 39, attempts: 44 },
    { rank: 3, title: 'Discovery Call Script', source: 'Gong', confidence: 87, wins: 42, attempts: 49 },
    { rank: 4, title: 'High Potential Deals', source: 'Salesforce', confidence: 78, wins: 25, attempts: 32 },
    { rank: 5, title: 'Urgency Email', source: 'Gong', confidence: 73, wins: 30, attempts: 41 },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">📈 Confidence Dashboard</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4 text-center">
            <div>
              <h3 className="text-lg font-medium">🔥 Avg. Confidence Score</h3>
              <Badge className="text-xl py-2 px-4 bg-green-100 text-green-700">83%</Badge>
            </div>
            <div>
              <h3 className="text-lg font-medium">✅ Recommendations Analyzed</h3>
              <Badge className="text-xl py-2 px-4 bg-blue-100 text-blue-700">152</Badge>
            </div>
            <div>
              <h3 className="text-lg font-medium">🎯 Confirmed Wins</h3>
              <Badge className="text-xl py-2 px-4 bg-purple-100 text-purple-700">126 (83%)</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Top Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            {recommendations.map((rec) => (
              <div key={rec.rank} className="flex justify-between items-center py-4 border-b">
                <div>
                  <span className="font-medium mr-2">#{rec.rank}</span>
                  {rec.title} <Badge variant="outline">{rec.source}</Badge>
                </div>
                <div className="flex items-center gap-4">
                  <Progress value={rec.confidence} className="w-[120px]" />
                  <Badge
                    className={rec.confidence > 80 ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}
                  >
                    {rec.confidence}%
                  </Badge>
                  <Button size="sm" variant="outline">Details 🔍</Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Recommendation Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="font-semibold">🎯 Confidence Score</span>
              <Badge className="bg-green-100 text-green-700">92%</Badge>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">✅ Wins / ❌ Losses</span>
              <Badge className="bg-blue-100 text-blue-700">48 / 4</Badge>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">📈 Conversion Lift</span>
              <Badge className="bg-purple-100 text-purple-700">+34%</Badge>
            </div>

            <div className="bg-gray-100 p-4 rounded">
              <h4 className="font-semibold mb-2">💬 Supporting Evidence:</h4>
              <ul className="list-disc pl-5 text-sm">
                <li>Gong calls show strong prospect engagement with "Pricing Clarity" messaging.</li>
                <li>Salesforce data confirms higher conversion rates and faster sales cycles.</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-4 rounded">
              <h4 className="font-semibold mb-2">🚀 Recommended Actions:</h4>
              <ul className="list-disc pl-5 text-sm">
                <li>Implement "Pricing Clarity" messaging in SaaS ICP campaigns immediately.</li>
                <li>Brief BDRs with provided messaging script and key talking points.</li>
                <li>Monitor performance weekly.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
