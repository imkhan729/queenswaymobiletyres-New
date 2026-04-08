
$srcPath = "c:\Users\Roy\Downloads\Queensway-Revamp\client\src"
$files = Get-ChildItem -Path $srcPath -Recurse -Include '*.tsx','*.ts' | Select-Object -ExpandProperty FullName
$broken = @()
foreach ($f in $files) {
    $content = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)
    if ($content -match '(?m)^import \{[\r\n]+import \{ handlePhoneClick') {
        $broken += $f
        Write-Host "BROKEN: $f"
    }
}
if ($broken.Count -eq 0) { Write-Host "All imports are correctly placed." }
Write-Host "Done. Total broken files: $($broken.Count)"
