import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

const SVTRiskAssessment = () => {
  const [riskFactors, setRiskFactors] = useState({
    bloodClotExtent: false,
    bloodClotLocation: false,
    progression: false,
    saphenofemoral: false,
    recentSurgery: false,
    activeCancer: false,
    thrombusHistory: false,
    otherRiskFactors: false
  });

  const hasHighRisk = Object.values(riskFactors).some(value => value);

  const handleCheckboxChange = (factor) => {
    setRiskFactors(prev => ({
      ...prev,
      [factor]: !prev[factor]
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl font-bold mb-2">
            表在静脈血栓症（SVT）リスク評価ツール
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border rounded p-4 bg-gray-50">
              <h2 className="font-semibold mb-3">リスク因子のチェック</h2>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={riskFactors.bloodClotExtent}
                    onChange={() => handleCheckboxChange('bloodClotExtent')}
                    className="rounded border-gray-300"
                  />
                  <span>広範囲の血栓（5cm以上の長さ）</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={riskFactors.bloodClotLocation}
                    onChange={() => handleCheckboxChange('bloodClotLocation')}
                    className="rounded border-gray-300"
                  />
                  <span>大伏在静脈の関与</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={riskFactors.progression}
                    onChange={() => handleCheckboxChange('progression')}
                    className="rounded border-gray-300"
                  />
                  <span>膝上部への進展</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={riskFactors.saphenofemoral}
                    onChange={() => handleCheckboxChange('saphenofemoral')}
                    className="rounded border-gray-300"
                  />
                  <span>伏在大腿接合部への近接</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={riskFactors.recentSurgery}
                    onChange={() => handleCheckboxChange('recentSurgery')}
                    className="rounded border-gray-300"
                  />
                  <span>最近の手術歴</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={riskFactors.activeCancer}
                    onChange={() => handleCheckboxChange('activeCancer')}
                    className="rounded border-gray-300"
                  />
                  <span>活動性のがん</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={riskFactors.thrombusHistory}
                    onChange={() => handleCheckboxChange('thrombusHistory')}
                    className="rounded border-gray-300"
                  />
                  <span>血栓の既往歴</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={riskFactors.otherRiskFactors}
                    onChange={() => handleCheckboxChange('otherRiskFactors')}
                    className="rounded border-gray-300"
                  />
                  <span>その他のリスク因子（年齢、肥満、静脈瘤など）</span>
                </label>
              </div>
            </div>

            <Alert className={hasHighRisk ? 'bg-red-50' : 'bg-green-50'}>
              <AlertDescription>
                {hasHighRisk ? (
                  <div className="text-red-700">
                    <p className="font-semibold mb-2">高リスク: 抗凝固療法が推奨されます</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>推奨される治療期間: 45日間の抗凝固療法</li>
                      <li>深部静脈血栓症(DVT)や肺塞栓症(PE)への進展リスクが高いと判断されます</li>
                      <li>フォンダパリヌクスまたはリバーロキサバンによる治療を検討してください</li>
                    </ul>
                  </div>
                ) : (
                  <div className="text-green-700">
                    <p className="font-semibold">低リスク: 経過観察が推奨されます</p>
                    <p>重大なリスク因子が認められません。定期的な経過観察を行ってください。</p>
                  </div>
                )}
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      <div className="text-sm text-gray-500 mt-4">
        <p>注意: このツールは参考情報を提供するものであり、最終的な治療判断は担当医師が行います。</p>
      </div>
    </div>
  );
};

export default SVTRiskAssessment;
