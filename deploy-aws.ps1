$ErrorActionPreference = 'Stop'
$bucketName = 'vikash-portfolio-site'
$region = 'us-east-1'
$distributionId = '<CLOUDFRONT_DISTRIBUTION_ID>'
$siteDir = 'C:\Users\vikash\my-portfolio'

python -m awscli s3 mb "s3://$bucketName" --region $region
python -m awscli s3 sync "$siteDir" "s3://$bucketName" --delete --exclude "*.md" --exclude ".git/*" --exclude "*.ps1" --exclude "docs/*"
python -m awscli cloudfront create-invalidation --distribution-id $distributionId --paths "/*"
Write-Host "Portfolio deployed to: https://$bucketName.s3.$region.amazonaws.com/"
