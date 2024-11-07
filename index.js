<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SVTリスク評価ツール</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 2rem;
        }
        .container {
            max-width: 600px;
            margin: auto;
        }
        .result {
            margin-top: 1rem;
            padding: 1rem;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>SVTリスク評価ツール</h1>
        <form id="riskForm">
            <label><input type="checkbox" id="extent" name="risk" value="extent"> 広範なSVT（長さ&gt;5cm）</label><br>
            <label><input type="checkbox" id="location" name="risk" value="location"> 大伏在静脈の関与</label><br>
            <label><input type="checkbox" id="aboveKnee" name="risk" value="aboveKnee"> 膝上の血栓</label><br>
            <label><input type="checkbox" id="junction" name="risk" value="junction"> 伏在大腿接合部への接近</label><br>
            <label><input type="checkbox" id="surgery" name="risk" value="surgery"> 最近の手術歴</label><br>
            <label><input type="checkbox" id="cancer" name="risk" value="cancer"> 活動性のがん</label><br>
            <label><input type="checkbox" id="history" name="risk" value="history"> 血栓の既往歴</label><br>
            <label><input type="checkbox" id="otherFactors" name="risk" value="otherFactors"> その他のリスク因子（年齢、肥満、静脈瘤など）</label><br><br>
            <button type="button" onclick="assessRisk()">リスク評価</button>
        </form>
        <div id="result" class="result"></div>
    </div>

    <script>
        function assessRisk() {
            const risks = document.querySelectorAll('input[name="risk"]:checked');
            let riskCount = risks.length;
            let resultDiv = document.getElementById('result');

            if (riskCount > 0) {
                resultDiv.textContent = `この患者はDVTまたはPEへの進展リスクが高いです。45日間の抗凝固療法が推奨されます。`;
                resultDiv.style.backgroundColor = '#f8d7da';
                resultDiv.style.color = '#721c24';
            } else {
                resultDiv.textContent = `この患者は進展リスクが低いです。SVTの経過観察が適切である可能性があります。`;
                resultDiv.style.backgroundColor = '#d4edda';
                resultDiv.style.color = '#155724';
            }
        }
    </script>
</body>
</html>
