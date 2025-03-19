import 'swiper/css';
import 'swiper/css/pagination';

import * as echarts from 'echarts';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useEffect, useRef, useState } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const App: React.FC = () => {
  const { t, i18n } = useTranslation(['common']);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      const option = {
        animation: false,
        title: {
          // text: t('chart.title'), TODO
          text: 'Chart Title',
          textStyle: {
            color: '#1a1a1a',
            fontSize: 16,
          },
        },
        xAxis: {
          type: 'category',
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [150, 230, 450, 800, 1200, 1800],
            type: 'line',
            smooth: true,
            color: '#6366f1',
          },
        ],
      };
      chart.setOption(option);
    }
  }, [t]);

  const router = useRouter();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    router.push(router.pathname, router.asPath, { locale: lng });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  if (i18n.language === 'en') {
                    changeLanguage('zh-CN');
                  } else {
                    changeLanguage('en');
                  }
                }}
                className="text-gray-700 hover:text-indigo-600"
              >
                {i18n?.language === 'en' ? '中文' : 'English'}
              </button>
              <img
                src={`${router.basePath}/assets/images/logo.svg `}
                alt="Picture Reader Logo"
                className="h-12"
              />
              <div className="ml-10 hidden space-x-8 md:flex">
                <a
                  href="#features"
                  className="text-gray-700 hover:text-indigo-600"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('features');
                  }}
                >
                  {t('navigation.features')}
                </a>
                <a
                  href="#demo"
                  className="text-gray-700 hover:text-indigo-600"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('demo');
                  }}
                >
                  {t('navigation.demo')}
                </a>
                <a
                  href="#compatibility"
                  className="text-gray-700 hover:text-indigo-600"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('compatibility');
                  }}
                >
                  {t('navigation.compatibility')}
                </a>
                <a
                  href="#support"
                  className="text-gray-700 hover:text-indigo-600"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('support');
                  }}
                >
                  {t('navigation.support')}
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <a
                href="https://chromewebstore.google.com/detail/picture-reader/beljcmkgfgeegijofiokcoalfbappfen"
                target="_blank"
                rel="noreferrer"
              >
                <button className="!rounded-button cursor-pointer whitespace-nowrap bg-indigo-600 px-6 py-2 text-white hover:bg-indigo-700">
                  {t('buttons.add_browser')}
                </button>
              </a>
              <button
                className="ml-4 cursor-pointer text-gray-600 md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-x-0 top-16 z-40 bg-white shadow-lg md:hidden">
          <div className="space-y-2 px-4 py-2">
            <a
              href="#features"
              className="block py-2 text-gray-700"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('features');
                setIsMenuOpen(false);
              }}
            >
              {t('navigation.features')}
            </a>
            <a
              href="#compatibility"
              className="block py-2 text-gray-700"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('compatibility');
                setIsMenuOpen(false);
              }}
            >
              {t('navigation.compatibility')}
            </a>
            <a
              href="#demo"
              className="block py-2 text-gray-700"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('demo');
                setIsMenuOpen(false);
              }}
            >
              {t('navigation.demo')}
            </a>
            <a
              href="#support"
              className="block py-2 text-gray-700"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('support');
                setIsMenuOpen(false);
              }}
            >
              {t('navigation.support')}
            </a>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <div className="relative min-h-[800px] bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
        <div className="absolute inset-0">
          <img
            src="https://public.readdy.ai/ai/img_res/284cfe4105610c2162df3281d026650b.jpg"
            alt="Background Pattern"
            className="size-full object-cover opacity-50"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8 text-left">
              <div className="space-y-4">
                <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 lg:text-6xl">
                  <span className="block">{t('title')}</span>
                </h1>
                <p>
                  <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-extrabold text-transparent">
                    {t('subtitle')}
                  </span>
                </p>
                <p className="max-w-2xl text-xl text-gray-600">
                  {t('description')}
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://chromewebstore.google.com/detail/picture-reader/beljcmkgfgeegijofiokcoalfbappfen"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="!rounded-button flex items-center justify-center whitespace-nowrap bg-gradient-to-r from-indigo-600 to-indigo-700 px-8 py-4 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:from-indigo-700 hover:to-indigo-800 hover:shadow-xl">
                    <i className="fab fa-chrome mr-2"></i>
                    {t('buttons.add_chrome')}
                  </button>
                </a>
                <a
                  href="https://microsoftedge.microsoft.com/addons/detail/picture-reader/ejbbhhcdffiocibipjepabjbpejplooh"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="!rounded-button flex items-center justify-center whitespace-nowrap border-2 border-indigo-100 bg-white px-8 py-4 text-lg font-medium text-indigo-700 shadow-lg transition-all duration-300 hover:bg-indigo-50 hover:shadow-xl">
                    <i className="fab fa-edge mr-2"></i>
                    {t('buttons.add_edge')}
                  </button>
                </a>
              </div>
              <div className="flex items-center gap-8 pt-8">
                <div className="flex items-center">
                  <i className="fas fa-star mr-2 text-yellow-400"></i>
                  <span className="text-gray-600">4.9/5 Rating</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-download mr-2 text-indigo-600"></i>
                  <span className="text-gray-600">50K+ Users</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-10 blur-xl"></div>
              <img
                src="https://public.readdy.ai/ai/img_res/93bb4f4e74c0506840a36adde7681a7c.jpg"
                alt="Picture Reader Interface"
                className="relative w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div id="features" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('features.title')}
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              {t('features.description')}
            </p>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: t('features.items.0.title'),
                description: t('features.items.0.description'),
                icon: 'fa-images',
              },
              {
                title: t('features.items.1.title'),
                description: t('features.items.1.description'),
                icon: 'fa-crop',
              },
              {
                title: t('features.items.2.title'),
                description: t('features.items.2.description'),
                icon: 'fa-play-circle',
              },
              {
                title: t('features.items.3.title'),
                description: t('features.items.3.description'),
                icon: 'fa-filter',
              },
              {
                title: t('features.items.4.title'),
                description: t('features.items.4.description'),
                icon: 'fa-download',
              },
              {
                title: t('features.items.5.title'),
                description: t('features.items.5.description'),
                icon: 'fa-sync',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="mb-4 text-3xl text-indigo-600">
                  <i className={`fas ${feature.icon}`}></i>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Screenshot Showcase */}
      <div id="demo" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('demo.title')}
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              {t('demo.description')}
            </p>
          </div>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            className="rounded-xl shadow-2xl"
          >
            {[
              {
                title: t('demo.slides.0.title'),
                description: t('demo.slides.0.description'),
                image: `${router.basePath}/assets/images/example1.png`,
              },
              {
                title: t('demo.slides.1.title'),
                description: t('demo.slides.1.description'),
                image: `${router.basePath}/assets/images/example2.png`,
              },
              {
                title: t('demo.slides.2.title'),
                description: t('demo.slides.2.description'),
                image: `${router.basePath}/assets/images/example3.png`,
              },
              {
                title: t('demo.slides.3.title'),
                description: t('demo.slides.3.description'),
                image: `${router.basePath}/assets/images/example4.png`,
              },
            ].map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-[720px] w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-8 text-white">
                    <h3 className="mb-2 text-2xl font-bold">{slide.title}</h3>
                    <p className="text-lg">{slide.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Statistics Section */}
      <div id="compatibility" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {t('stats.title')}
              </h2>
              <div ref={chartRef} style={{ height: '400px' }}></div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {[
                { number: '50K+', label: 'Active Users' },
                { number: '100+', label: 'Supported Websites' },
                { number: '4.8/5', label: 'User Rating' },
                { number: '1M+', label: 'Images Processed' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-gray-50 p-6 text-center"
                >
                  <div className="text-3xl font-bold text-indigo-600">
                    {stat.number}
                  </div>
                  <div className="mt-2 text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Supported Websites */}
      <div id="support" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-16 text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('supported_websites.title')}
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              'Unsplash',
              'Pexels',
              'PIXIV',
              '500px',
              'Behance',
              'DeviantArt',
              'Artstation',
              'Pinterest',
            ].map((site, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-6 text-center shadow"
              >
                <img
                  src={`https://readdy.ai/api/search-image?query=minimalist logo design for ${site} website with simple geometric shapes on white background professional clean&width=100&height=100&seq=${index + 3}&orientation=squarish`}
                  alt={site}
                  className="mx-auto mb-4 size-16"
                />
                <div className="font-medium text-gray-900">{site}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-xl font-bold">Picture Reader</h3>
              <p className="text-gray-400">
                Your ultimate tool for web image management
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-white"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#compatibility"
                    className="text-gray-400 hover:text-white"
                  >
                    Compatibility
                  </a>
                </li>
                <li>
                  <a href="#demo" className="text-gray-400 hover:text-white">
                    Demo
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Picture Reader. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// export const getStaticProps = getLocaleProps(['common']);

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}

export default App;
