
$srcPath = "c:\Users\Roy\Downloads\Queensway-Revamp\client\src"
$files = Get-ChildItem -Path $srcPath -Recurse -Include '*.tsx' | Select-Object -ExpandProperty FullName

$oldOnClick = "onClick={() => { if (typeof window !== 'undefined' && window['gtag']) { window['gtag']('event', 'conversion', { 'send_to': 'AW-17775313541/OJUeCK_Vh_wbEIWF95tC', 'transaction_id': '' }); } }}"
$newOnClick = "onClick={handlePhoneClick}"

$totalUpdated = 0

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file, [System.Text.Encoding]::UTF8)
    if ($content.Contains($oldOnClick)) {
        $newContent = $content.Replace($oldOnClick, $newOnClick)
        [System.IO.File]::WriteAllText($file, $newContent, [System.Text.Encoding]::UTF8)
        Write-Host "Updated: $file"
        $totalUpdated++
    }
}

Write-Host ""
Write-Host "Total files updated: $totalUpdated"
