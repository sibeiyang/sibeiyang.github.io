// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "\\\\* equal contribution; † corresponding author.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-our-website-is-released-thanks-to-yufan-hanzhuo-and-yuchen",
          title: 'Our website is released! Thanks to Yufan, Hanzhuo and Yuchen :)',
          description: "",
          section: "News",},{id: "news-sibei-yang-will-serve-as-area-chair-for-wacv2024",
          title: 'Sibei Yang will serve as Area Chair for WACV2024.',
          description: "",
          section: "News",},{id: "news-congratulate-to-ge-zheng-for-winning-the-undergraduate-excellent-graduation-thesis",
          title: 'Congratulate to Ge Zheng for winning the Undergraduate Excellent Graduation Thesis!',
          description: "",
          section: "News",},{id: "news-5-papers-are-accepted-by-iccv-2023",
          title: '5 papers are accepted by  ICCV 2023  🎉',
          description: "",
          section: "News",},{id: "news-2-papers-free-bloom-zero-shot-text-to-video-generation-and-ddcot-cot-prompting-for-multimodal-reasoning-in-lms-are-accepted-by-neurips-2023",
          title: '2 papers Free-Bloom (Zero-Shot Text-to-Video Generation) and DDCoT (CoT Prompting for Multimodal Reasoning...',
          description: "",
          section: "News",},{id: "news-congratulations-to-cheng-shi-for-receiving-the-national-scholarship-and-to-jiajin-tang-for-achieving-the-outstanding-student-award",
          title: 'Congratulations to Cheng Shi for receiving the National Scholarship, and to Jiajin Tang...',
          description: "",
          section: "News",},{id: "news-one-paper-is-accepted-by-iclr-2024",
          title: 'One paper is accepted by ICLR 2024 🐲🐲🐲',
          description: "",
          section: "News",},{id: "news-two-papers-are-accepted-by-cvpr-2024",
          title: 'Two papers are accepted by CVPR 2024 🎊🎊🎊',
          description: "",
          section: "News",},{id: "news-three-papers-are-accepted-by-eccv-2024",
          title: 'Three papers are accepted by ECCV 2024 🎉🎉🎉',
          description: "",
          section: "News",},{id: "news-one-paper-is-accepted-by-tpami-2024",
          title: 'One Paper is accepted by TPAMI 2024 👏👏👏',
          description: "",
          section: "News",},{id: "news-congratulations-to-cheng-shi-for-once-again-receiving-the-national-scholarship-and-to-ge-zheng-for-achieving-the-national-scholarship-as-well",
          title: 'Congratulations to Cheng Shi for once again receiving the National Scholarship, and to...',
          description: "",
          section: "News",},{id: "news-sibei-yang-will-serve-as-area-chair-for-iccv-2025",
          title: 'Sibei Yang will serve as Area Chair for ICCV 2025',
          description: "",
          section: "News",},{id: "news-3-papers-are-accepted-by-iclr-2025",
          title: '3 papers are accepted by ICLR 2025 🎊🎊🎊',
          description: "",
          section: "News",},{id: "news-6-papers-are-accepted-by-cvpr-2025",
          title: '6 papers are accepted by CVPR 2025 🥳🥳🥳',
          description: "",
          section: "News",},{id: "news-2-papers-are-accepted-by-acl-2025",
          title: '2 papers are accepted by ACL 2025 🎉🎉',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
