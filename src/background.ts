// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener((text: string) => {
  // Encode user input for special characters , / ? : @ & = + $ #
  if (text) {
    const newURL: string =
      "https://www.google.com/search?q=" + encodeURIComponent(text);
    chrome.tabs.update({ url: newURL });
  } else {
    return;
  }
});
