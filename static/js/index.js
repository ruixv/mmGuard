function copyBibtex() {
  const code = document.getElementById('bibtex-code');
  const label = document.getElementById('copy-label');
  if (!code) return;
  const text = code.innerText;

  const onDone = () => {
    if (!label) return;
    const original = label.innerText;
    label.innerText = 'Copied!';
    setTimeout(() => { label.innerText = original; }, 1500);
  };

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(onDone).catch(() => fallbackCopy(text, onDone));
  } else {
    fallbackCopy(text, onDone);
  }
}

function fallbackCopy(text, cb) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); } catch (_) {}
  document.body.removeChild(ta);
  if (cb) cb();
}
