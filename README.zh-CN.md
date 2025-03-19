<p align="center">
  <a href="https://github.com/kakuuuu/picture-reader">
    <img src="./images/logo.svg" alt="Picture Reader - Unleash Read Experience" width="200">
  </a>
  <br>
  <h1 align="center">Picture Reader</h1>
  <p align="center">
    <br> 中文 | <a href="README.md">English</a>
   </p>
  <p align="center">
  <a href="https://github.com/kakuuuu/picture-reader/releases">
    <img alt="Follow Us on Twitter" src="https://img.shields.io/github/v/release/kakuuuu/picture-reader" />
  </a>
  <a href="https://chromewebstore.google.com/detail/picture-reader/beljcmkgfgeegijofiokcoalfbappfen">
    <img alt="Follow Us on Twitter" src="https://img.shields.io/chrome-web-store/v/beljcmkgfgeegijofiokcoalfbappfen?style=flat&logo=chromewebstore&logoColor=white&color=%2334A853" />
  </a>
  <a href="https://microsoftedge.microsoft.com/addons/detail/picture-reader/ejbbhhcdffiocibipjepabjbpejplooh">
    <img alt="Follow Us on Twitter" src="https://img.shields.io/chrome-web-store/v/beljcmkgfgeegijofiokcoalfbappfen?style=flat&label=Microsoft Edge Store&logoColor=white&color=%239254de" />
  </a>
  </p>
</p>

## Getting Started

- 版本发布 [Release](https://github.com/kakuuuu/picture-reader/releases)

- Google Chrome 拓展商店 [Chrome Extension](https://chromewebstore.google.com/detail/picture-reader/beljcmkgfgeegijofiokcoalfbappfen)

- Microsoft Edge 拓展商店 [Edge Extension](https://microsoftedge.microsoft.com/addons/detail/picture-reader/ejbbhhcdffiocibipjepabjbpejplooh)

## 项目介绍

`Picture Reader` 是一个用于提取当前网页所有图片并在新的统一界面展示的 Chrome/Edge 浏览器插件。该插件提供了幻灯片式播放、图片尺寸过滤、批量下载等功能，使用户能够更方便地浏览和管理网页中的图片。[Official website](https://picture-reader-web.vercel.app/)

支持绝大部分图片站点 Unsplash、Pexels、 PIXIV、18COMIC...

## 主要功能

- **提取网页图片统一浏览**：自动提取当前网页中的所有图片，并在统一界面中展示。支持图片的放大、缩小、旋转等功能
- **支持图片的放大、缩小、旋转操作**: 支持键盘导航,滚轮缩放,拖拽
- **幻灯片式播放**：支持定时播放图片，用户可以设置播放间隔时间。
- **图片尺寸过滤**：根据用户设置的尺寸过滤条件，筛选出符合条件的图片进行展示。
- **批量下载**：支持批量下载当前图片列表中的图片，方便用户保存和管理图片。 (部分网站可能会有限制,无法下载)
- **自动加载**：自动滚动，加载网页中的图片内容。
- **适配移动端**: 响应式设计,适配 kiwi 浏览器

## 使用示范

![示例1](./images/example1.png)

![示例2](./images/example2.jpg)

![示例3](./images/example3.jpg)

![示例4](./images/example4.png)

## 使用方法

1. 在 Chrome 浏览器中加载插件：

   - 打开 Chrome 浏览器，进入 `chrome://extensions/` 页面。
   - 打开右上角的开发者模式。
   - 点击左上角的“加载已解压的扩展程序”按钮，选择项目的 `dist` 目录。

2. 打开任意包含图片的网页，点击浏览器右上角的插件图标，即可使用 `Picture Reader` 插件提取并浏览网页中的图片。

## 待补充功能

- **侧边栏图片列表预览**：在侧边栏中预览所有提取的图片，方便用户快速浏览和选择。

## 优化点

- **性能优化**：优化图片提取和展示的性能，提升用户体验。
- **界面优化**：改进用户界面设计，使其更加美观和易用。
- **功能扩展**：根据用户反馈，增加更多实用功能。
