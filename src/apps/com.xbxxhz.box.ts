import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xbxxhz.box',
  name: '小白学习打印',
  groups: [
    {
      key: 1,
      name: '全屏广告-广告弹窗',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          name: '红包弹窗',
          quickFind: true,
          activityIds: 'com.mango.login.main.MainAct',
          matches: '[vid="dg_dialog_frag_ads_popup_x"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/9137cb2d-fb8d-4782-b3c9-88b89b79c8a0',
          snapshotUrls: 'https://i.gkd.li/i/14433386',
        },
      ],
    },
  ],
});