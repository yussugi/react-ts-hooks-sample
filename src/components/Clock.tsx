import React, { useState, useEffect, useLayoutEffect } from 'react';

// タイマーが呼び出される周期を1秒にする
const UPDATE_CYCLE = 1000;

// localstorageで使用するキー
const KEY_LOCALE = 'KEY_LOCALE';

enum Locale {
  US = 'en-US',
  JP = 'ja-JP',
}

const getLocaleFromString = (text: string) => {
  switch (text) {
    case Locale.US:
      return Locale.US;
    case Locale.JP:
      return Locale.JP;
    default:
      return Locale.US;
  }
};

export const Clock = () => {
  const [timestamp, setTimeStamp] = useState(new Date());
  const [locale, setLocale] = useState(Locale.US);

  // タイマーのセットをするための副作用
  useEffect(() => {
    // タイマーセット
    const timer = setInterval(() => {
      setTimeStamp(new Date());
    }, UPDATE_CYCLE);

    // クリーンアップ関数を渡し、アンマウント時にタイマーの解除をする
    return () => {
      clearInterval(timer);
    };
    // 初期描画時のみ実行するため第二引数に空の配列を渡す(依存配列)
  }, []);

  // localstorageから値を読み込むための副作用
  // 描画遅延をなくすため、描画関数内には埋め込まず、別のuseEffectを利用
  // --> useLayoutEffectを利用して初期描画のチラツキを無くす(同期処理)
  useLayoutEffect(() => {
    const savedLocale = localStorage.getItem(KEY_LOCALE);
    if (savedLocale !== null) {
      setLocale(getLocaleFromString(savedLocale));
    }
    // 初期描画時のみ実行(localstorageに保存していた値の取得)
  }, []);

  // localeが変化した時にlocalstorageに値を保持するための副作用
  useEffect(() => {
    localStorage.setItem(KEY_LOCALE, locale);
    // 依存配列にlocaleを渡しlocaleが変化するたびに実行するようにする
  }, [locale]);

  return (
    <div>
      <p>
        <span id="current-time-label">現在時刻</span>
        <span>:{timestamp.toLocaleString(locale)}</span>
        <br />
        <select
          value={locale}
          onChange={(e) => setLocale(getLocaleFromString(e.target.value))}
        >
          <option value="en-US">en-US</option>
          <option value="ja-JP">ja-JP</option>
        </select>
      </p>
    </div>
  );
};
