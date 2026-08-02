'use client';

import { useEffect } from 'react';

export function ConsoleWarning() {
  useEffect(() => {
    const base =
      'font-family:ui-monospace,SFMono-Regular,Menlo,monospace;' +
      'border-radius:8px;padding:8px 14px;';

    console.log(
      '%c⚠ Stop',
      base +
        'font-size:20px;font-weight:600;letter-spacing:0.02em;' +
        'color:#f7f6f3;background:#c45c5c;'
    );
    console.log(
      '%cIf someone asked you to paste something here, don\'t. ' +
        'They may be trying to steal your account.',
      base +
        'font-size:13px;line-height:1.5;color:rgba(29,29,31,0.75);' +
        'background:#f7f6f3;border:1px solid rgba(29,29,31,0.08);'
    );
    console.log(
      '%c#stay-safe',
      base +
        'font-size:32px;text-transform:uppercase;letter-spacing:0.18em;' +
        'color:#448f63;background:transparent;padding:0;'
    );
  }, []);

  return null;
}