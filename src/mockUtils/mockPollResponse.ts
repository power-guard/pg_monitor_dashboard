import { PollResponse } from 'types/api';

export const mockPollResponse: PollResponse = {
  done: false,
  proc_start: '2021-02-22T01:26:31.207',
  proc_end: null,
  plants: [
    {
      id: 'PGOM100001',
      name: 'PV System 1',
      dl_status: 2,
      last_update: '2021-02-22T01:21:34.217',
      energy_series: [
        {
          '2021-02-14T00:15:00': 0.0,
          '2021-02-14T00:30:00': 0.0,
          '2021-02-14T00:45:00': 0.0,
          '2021-02-14T01:00:00': 0.0,
          '2021-02-14T01:15:00': 0.0,
          '2021-02-14T01:30:00': 0.0,
          '2021-02-14T01:45:00': 0.0,
          '2021-02-14T02:00:00': 0.0,
          '2021-02-14T02:15:00': 0.0,
          '2021-02-14T02:30:00': 0.0,
          '2021-02-14T02:45:00': 0.0,
          '2021-02-14T03:00:00': 0.0,
          '2021-02-14T03:15:00': 0.0,
          '2021-02-14T03:30:00': 0.0,
          '2021-02-14T03:45:00': 0.0,
          '2021-02-14T04:00:00': 0.0,
          '2021-02-14T04:15:00': 0.0,
          '2021-02-14T04:30:00': 0.0,
          '2021-02-14T04:45:00': 0.0,
          '2021-02-14T05:00:00': 0.0,
          '2021-02-14T05:15:00': 0.0,
          '2021-02-14T05:30:00': 0.0,
          '2021-02-14T05:45:00': 0.0,
          '2021-02-14T06:00:00': 0.0,
          '2021-02-14T06:15:00': 0.0,
          '2021-02-14T06:30:00': 0.0,
          '2021-02-14T06:45:00': 220.0,
          '2021-02-14T07:00:00': 688.0,
          '2021-02-14T07:15:00': 1504.0,
          '2021-02-14T07:30:00': 1996.0,
          '2021-02-14T07:45:00': 1280.0,
          '2021-02-14T08:00:00': 1400.0,
          '2021-02-14T08:15:00': 1820.0,
          '2021-02-14T08:30:00': 2888.0,
          '2021-02-14T08:45:00': 12024.0,
          '2021-02-14T09:00:00': 17704.0,
          '2021-02-14T09:15:00': 23372.0,
          '2021-02-14T09:30:00': 29528.0,
          '2021-02-14T09:45:00': 29572.0,
          '2021-02-14T10:00:00': 29268.0,
          '2021-02-14T10:15:00': 30012.0,
          '2021-02-14T10:30:00': 29872.0,
          '2021-02-14T10:45:00': 29984.0,
          '2021-02-14T11:00:00': 29976.0,
          '2021-02-14T11:15:00': 29984.0,
          '2021-02-14T11:30:00': 29976.0,
          '2021-02-14T11:45:00': 20016.0,
        },
      ],
      logs: [
        { date: '2021-02-13T14:41:42', level: 'INFO', description: 'Time adjusted / new time' },
        { date: '2021-02-13T14:41:33', level: 'INFO', description: 'Time adjusted / old time' },
      ],
    },
    {
      id: 'PGOM100002',
      name: 'PV System 2',
      dl_status: 2,
      last_update: '2021-02-22T01:18:37.222',
      energy_series: [
        {
          '2021-02-14T00:15:00': 0.0,
          '2021-02-14T00:30:00': 0.0,
          '2021-02-14T00:45:00': 0.0,
          '2021-02-14T01:00:00': 0.0,
          '2021-02-14T01:15:00': 0.0,
          '2021-02-14T01:30:00': 0.0,
          '2021-02-14T01:45:00': 0.0,
          '2021-02-14T02:00:00': 0.0,
          '2021-02-14T02:15:00': 0.0,
          '2021-02-14T02:30:00': 0.0,
          '2021-02-14T02:45:00': 0.0,
          '2021-02-14T03:00:00': 0.0,
          '2021-02-14T03:15:00': 0.0,
          '2021-02-14T03:30:00': 0.0,
          '2021-02-14T03:45:00': 0.0,
          '2021-02-14T04:00:00': 0.0,
          '2021-02-14T04:15:00': 0.0,
          '2021-02-14T04:30:00': 0.0,
          '2021-02-14T04:45:00': 0.0,
          '2021-02-14T05:00:00': 0.0,
          '2021-02-14T05:15:00': 0.0,
          '2021-02-14T05:30:00': 0.0,
          '2021-02-14T05:45:00': 0.0,
          '2021-02-14T06:00:00': 0.0,
          '2021-02-14T06:15:00': 0.0,
          '2021-02-14T06:30:00': 0.0,
          '2021-02-14T06:45:00': 236.0,
          '2021-02-14T07:00:00': 1000.0,
          '2021-02-14T07:15:00': 2220.0,
          '2021-02-14T07:30:00': 2964.0,
          '2021-02-14T07:45:00': 1888.0,
          '2021-02-14T08:00:00': 2068.0,
          '2021-02-14T08:15:00': 2696.0,
          '2021-02-14T08:30:00': 4268.0,
          '2021-02-14T08:45:00': 17348.0,
          '2021-02-14T09:00:00': 26872.0,
          '2021-02-14T09:15:00': 36020.0,
          '2021-02-14T09:30:00': 48652.0,
          '2021-02-14T09:45:00': 48664.0,
          '2021-02-14T10:00:00': 47512.0,
          '2021-02-14T10:15:00': 49716.0,
          '2021-02-14T10:30:00': 49580.0,
          '2021-02-14T10:45:00': 48156.0,
          '2021-02-14T11:00:00': 48844.0,
          '2021-02-14T11:15:00': 49560.0,
          '2021-02-14T11:30:00': 49820.0,
          '2021-02-14T11:45:00': 33232.0,
        },
      ],
      logs: [
        { date: '2021-02-14T10:42:10', level: 'INFO', description: 'Active power limited AC voltage' },
        { date: '2021-02-14T10:42:10', level: 'INFO', description: 'Active power limited AC voltage' },
        { date: '2021-02-14T10:39:20', level: 'INFO', description: 'Active power limited AC voltage' },
        { date: '2021-02-14T10:39:20', level: 'INFO', description: 'Active power limited AC voltage' },
        { date: '2021-02-14T09:40:25', level: 'INFO', description: 'Time adjusted / new time' },
        { date: '2021-02-14T09:40:16', level: 'INFO', description: 'Time adjusted / old time' },
        { date: '2021-02-13T11:14:35', level: 'INFO', description: 'Active power limited AC voltage' },
        { date: '2021-02-13T11:14:35', level: 'INFO', description: 'Active power limited AC voltage' },
        { date: '2021-02-13T11:06:09', level: 'INFO', description: 'Active power limited AC voltage' },
        { date: '2021-02-13T11:06:09', level: 'INFO', description: 'Active power limited AC voltage' },
      ],
    },
    {
      id: 'PGOM100003',
      name:
        '\u30df\u30e9\u30af\u30eb\u798f\u5ca1\u30d1\u30ef\u30fc\u30d5\u30eb\u306a\u592a\u967d\u5149\u767a\u96fb\u6240\uff13',
      dl_status: 1,
      last_update: null,
      energy_series: [],
      logs: [],
    },
    {
      id: 'PGOM100004',
      name: 'PGOM100004',
      dl_status: 2,
      last_update: '2021-02-22T00:11:34.219',
      energy_series: [
        {
          '2021-02-20 00:00:00': null,
          '2021-02-20 00:15:00': null,
          '2021-02-20 00:30:00': null,
          '2021-02-20 00:45:00': null,
          '2021-02-20 01:00:00': null,
          '2021-02-20 01:15:00': null,
          '2021-02-20 01:30:00': null,
          '2021-02-20 01:45:00': null,
          '2021-02-20 02:00:00': null,
          '2021-02-20 02:15:00': null,
          '2021-02-20 02:30:00': null,
          '2021-02-20 02:45:00': null,
          '2021-02-20 03:00:00': null,
          '2021-02-20 03:15:00': null,
          '2021-02-20 03:30:00': null,
          '2021-02-20 03:45:00': null,
          '2021-02-20 04:00:00': null,
          '2021-02-20 04:15:00': null,
          '2021-02-20 04:30:00': null,
          '2021-02-20 04:45:00': null,
          '2021-02-20 05:00:00': null,
          '2021-02-20 05:15:00': null,
          '2021-02-20 05:30:00': null,
          '2021-02-20 05:45:00': null,
          '2021-02-20 06:00:00': 0.0,
          '2021-02-20 06:15:00': null,
          '2021-02-20 06:30:00': 0.0,
          '2021-02-20 06:45:00': 2.0,
          '2021-02-20 07:00:00': 114.0,
          '2021-02-20 07:15:00': 357.0,
          '2021-02-20 07:30:00': 493.0,
          '2021-02-20 07:45:00': 914.0,
          '2021-02-20 08:00:00': 1888.0,
          '2021-02-20 08:15:00': 3988.0,
          '2021-02-20 08:30:00': 5687.0,
          '2021-02-20 08:45:00': 6811.0,
          '2021-02-20 09:00:00': 7995.0,
          '2021-02-20 09:15:00': 8788.0,
          '2021-02-20 09:30:00': 8943.0,
          '2021-02-20 09:45:00': 10062.0,
          '2021-02-20 10:00:00': 11134.0,
          '2021-02-20 10:15:00': 12297.0,
          '2021-02-20 10:30:00': 12528.0,
          '2021-02-20 10:45:00': 12668.0,
          '2021-02-20 11:00:00': 10975.0,
          '2021-02-20 11:15:00': 11283.0,
          '2021-02-20 11:30:00': 11373.0,
          '2021-02-20 11:45:00': 12557.0,
          '2021-02-20 12:00:00': 12718.0,
          '2021-02-20 12:15:00': 12738.0,
          '2021-02-20 12:30:00': 12703.0,
          '2021-02-20 12:45:00': 12785.0,
          '2021-02-20 13:00:00': 12732.0,
          '2021-02-20 13:15:00': 12750.0,
          '2021-02-20 13:30:00': 12689.0,
          '2021-02-20 13:45:00': 12785.0,
          '2021-02-20 14:00:00': 12730.0,
          '2021-02-20 14:15:00': 12608.0,
          '2021-02-20 14:30:00': 12102.0,
          '2021-02-20 14:45:00': 11374.0,
          '2021-02-20 15:00:00': 10955.0,
          '2021-02-20 15:15:00': 10164.0,
          '2021-02-20 15:30:00': 9299.0,
          '2021-02-20 15:45:00': 8260.0,
          '2021-02-20 16:00:00': 7178.0,
          '2021-02-20 16:15:00': 6118.0,
          '2021-02-20 16:30:00': 4966.0,
          '2021-02-20 16:45:00': 3700.0,
          '2021-02-20 17:00:00': 2049.0,
          '2021-02-20 17:15:00': 751.0,
          '2021-02-20 17:30:00': 484.0,
          '2021-02-20 17:45:00': 174.0,
          '2021-02-20 18:00:00': 17.0,
          '2021-02-20 18:15:00': 0.0,
          '2021-02-20 18:30:00': null,
          '2021-02-20 18:45:00': null,
          '2021-02-20 19:00:00': null,
          '2021-02-20 19:15:00': null,
          '2021-02-20 19:30:00': null,
          '2021-02-20 19:45:00': null,
          '2021-02-20 20:00:00': null,
          '2021-02-20 20:15:00': 0.0,
          '2021-02-20 20:30:00': null,
          '2021-02-20 20:45:00': null,
          '2021-02-20 21:00:00': null,
          '2021-02-20 21:15:00': null,
          '2021-02-20 21:30:00': null,
          '2021-02-20 21:45:00': null,
          '2021-02-20 22:00:00': null,
          '2021-02-20 22:15:00': null,
          '2021-02-20 22:30:00': null,
          '2021-02-20 22:45:00': null,
          '2021-02-20 23:00:00': null,
          '2021-02-20 23:15:00': null,
          '2021-02-20 23:30:00': null,
          '2021-02-20 23:45:00': null,
        },
      ],
      logs: [{ date: '2021-02-22T01:26:34.219', level: 'WARNING', description: '2 active alerts.' }],
    },
    {
      id: 'PGOM100005',
      name: '\u9e7f\u5150\u5cf6\u770c\u65e5\u7f6e\u5e02\u5439\u4e0a\u753a',
      dl_status: 2,
      last_update: '2021-02-22T00:11:37.223',
      energy_series: [
        {
          '2021-02-20 00:00:00': null,
          '2021-02-20 00:15:00': null,
          '2021-02-20 00:30:00': null,
          '2021-02-20 00:45:00': null,
          '2021-02-20 01:00:00': null,
          '2021-02-20 01:15:00': null,
          '2021-02-20 01:30:00': null,
          '2021-02-20 01:45:00': null,
          '2021-02-20 02:00:00': null,
          '2021-02-20 02:15:00': null,
          '2021-02-20 02:30:00': null,
          '2021-02-20 02:45:00': null,
          '2021-02-20 03:00:00': null,
          '2021-02-20 03:15:00': null,
          '2021-02-20 03:30:00': null,
          '2021-02-20 03:45:00': null,
          '2021-02-20 04:00:00': null,
          '2021-02-20 04:15:00': null,
          '2021-02-20 04:30:00': null,
          '2021-02-20 04:45:00': null,
          '2021-02-20 05:00:00': null,
          '2021-02-20 05:15:00': null,
          '2021-02-20 05:30:00': null,
          '2021-02-20 05:45:00': null,
          '2021-02-20 06:00:00': 0.0,
          '2021-02-20 06:15:00': null,
          '2021-02-20 06:30:00': 0.0,
          '2021-02-20 06:45:00': 2.0,
          '2021-02-20 07:00:00': 114.0,
          '2021-02-20 07:15:00': 357.0,
          '2021-02-20 07:30:00': 493.0,
          '2021-02-20 07:45:00': 914.0,
          '2021-02-20 08:00:00': 1888.0,
          '2021-02-20 08:15:00': 3988.0,
          '2021-02-20 08:30:00': 5687.0,
          '2021-02-20 08:45:00': 6811.0,
          '2021-02-20 09:00:00': 7995.0,
          '2021-02-20 09:15:00': 8788.0,
          '2021-02-20 09:30:00': 8943.0,
          '2021-02-20 09:45:00': 10062.0,
          '2021-02-20 10:00:00': 11134.0,
          '2021-02-20 10:15:00': 12297.0,
          '2021-02-20 10:30:00': 12528.0,
          '2021-02-20 10:45:00': 12668.0,
          '2021-02-20 11:00:00': 10975.0,
          '2021-02-20 11:15:00': 11283.0,
          '2021-02-20 11:30:00': 11373.0,
          '2021-02-20 11:45:00': 12557.0,
          '2021-02-20 12:00:00': 12718.0,
          '2021-02-20 12:15:00': 12738.0,
          '2021-02-20 12:30:00': 12703.0,
          '2021-02-20 12:45:00': 12785.0,
          '2021-02-20 13:00:00': 12732.0,
          '2021-02-20 13:15:00': 12750.0,
          '2021-02-20 13:30:00': 12689.0,
          '2021-02-20 13:45:00': 12785.0,
          '2021-02-20 14:00:00': 12730.0,
          '2021-02-20 14:15:00': 12608.0,
          '2021-02-20 14:30:00': 12102.0,
          '2021-02-20 14:45:00': 11374.0,
          '2021-02-20 15:00:00': 10955.0,
          '2021-02-20 15:15:00': 10164.0,
          '2021-02-20 15:30:00': 9299.0,
          '2021-02-20 15:45:00': 8260.0,
          '2021-02-20 16:00:00': 7178.0,
          '2021-02-20 16:15:00': 6118.0,
          '2021-02-20 16:30:00': 4966.0,
          '2021-02-20 16:45:00': 3700.0,
          '2021-02-20 17:00:00': 2049.0,
          '2021-02-20 17:15:00': 751.0,
          '2021-02-20 17:30:00': 484.0,
          '2021-02-20 17:45:00': 174.0,
          '2021-02-20 18:00:00': 17.0,
          '2021-02-20 18:15:00': 0.0,
          '2021-02-20 18:30:00': null,
          '2021-02-20 18:45:00': null,
          '2021-02-20 19:00:00': null,
          '2021-02-20 19:15:00': null,
          '2021-02-20 19:30:00': null,
          '2021-02-20 19:45:00': null,
          '2021-02-20 20:00:00': null,
          '2021-02-20 20:15:00': 0.0,
          '2021-02-20 20:30:00': null,
          '2021-02-20 20:45:00': null,
          '2021-02-20 21:00:00': null,
          '2021-02-20 21:15:00': null,
          '2021-02-20 21:30:00': null,
          '2021-02-20 21:45:00': null,
          '2021-02-20 22:00:00': null,
          '2021-02-20 22:15:00': null,
          '2021-02-20 22:30:00': null,
          '2021-02-20 22:45:00': null,
          '2021-02-20 23:00:00': null,
          '2021-02-20 23:15:00': null,
          '2021-02-20 23:30:00': null,
          '2021-02-20 23:45:00': null,
        },
        {
          '2021-02-20 00:00:00': null,
          '2021-02-20 00:15:00': null,
          '2021-02-20 00:30:00': null,
          '2021-02-20 00:45:00': null,
          '2021-02-20 01:00:00': null,
          '2021-02-20 01:15:00': null,
          '2021-02-20 01:30:00': null,
          '2021-02-20 01:45:00': null,
          '2021-02-20 02:00:00': null,
          '2021-02-20 02:15:00': null,
          '2021-02-20 02:30:00': null,
          '2021-02-20 02:45:00': null,
          '2021-02-20 03:00:00': 0.0,
          '2021-02-20 03:15:00': null,
          '2021-02-20 03:30:00': null,
          '2021-02-20 03:45:00': null,
          '2021-02-20 04:00:00': null,
          '2021-02-20 04:15:00': null,
          '2021-02-20 04:30:00': null,
          '2021-02-20 04:45:00': null,
          '2021-02-20 05:00:00': null,
          '2021-02-20 05:15:00': null,
          '2021-02-20 05:30:00': null,
          '2021-02-20 05:45:00': null,
          '2021-02-20 06:00:00': null,
          '2021-02-20 06:15:00': 0.0,
          '2021-02-20 06:30:00': null,
          '2021-02-20 06:45:00': 0.0,
          '2021-02-20 07:00:00': 80.0,
          '2021-02-20 07:15:00': 326.0,
          '2021-02-20 07:30:00': 600.0,
          '2021-02-20 07:45:00': 1057.0,
          '2021-02-20 08:00:00': 1297.0,
          '2021-02-20 08:15:00': 1795.0,
          '2021-02-20 08:30:00': 2236.0,
          '2021-02-20 08:45:00': 2843.0,
          '2021-02-20 09:00:00': 3871.0,
          '2021-02-20 09:15:00': 5378.0,
          '2021-02-20 09:30:00': 6945.0,
          '2021-02-20 09:45:00': 4746.0,
          '2021-02-20 10:00:00': 9633.0,
          '2021-02-20 10:15:00': 10011.0,
          '2021-02-20 10:30:00': 11712.0,
          '2021-02-20 10:45:00': 12196.0,
          '2021-02-20 11:00:00': 12465.0,
          '2021-02-20 11:15:00': 12407.0,
          '2021-02-20 11:30:00': 12722.0,
          '2021-02-20 11:45:00': 12574.0,
          '2021-02-20 12:00:00': 12715.0,
          '2021-02-20 12:15:00': 12649.0,
          '2021-02-20 12:30:00': 12672.0,
          '2021-02-20 12:45:00': 12620.0,
          '2021-02-20 13:00:00': 12564.0,
          '2021-02-20 13:15:00': 12070.0,
          '2021-02-20 13:30:00': 11042.0,
          '2021-02-20 13:45:00': 10086.0,
          '2021-02-20 14:00:00': 9518.0,
          '2021-02-20 14:15:00': 8914.0,
          '2021-02-20 14:30:00': 8557.0,
          '2021-02-20 14:45:00': 8782.0,
          '2021-02-20 15:00:00': 8571.0,
          '2021-02-20 15:15:00': 7823.0,
          '2021-02-20 15:30:00': 7531.0,
          '2021-02-20 15:45:00': 6866.0,
          '2021-02-20 16:00:00': 6071.0,
          '2021-02-20 16:15:00': 5263.0,
          '2021-02-20 16:30:00': 4386.0,
          '2021-02-20 16:45:00': 3212.0,
          '2021-02-20 17:00:00': 2641.0,
          '2021-02-20 17:15:00': 1490.0,
          '2021-02-20 17:30:00': 829.0,
          '2021-02-20 17:45:00': 362.0,
          '2021-02-20 18:00:00': 55.0,
          '2021-02-20 18:15:00': 0.0,
          '2021-02-20 18:30:00': null,
          '2021-02-20 18:45:00': null,
          '2021-02-20 19:00:00': null,
          '2021-02-20 19:15:00': null,
          '2021-02-20 19:30:00': null,
          '2021-02-20 19:45:00': null,
          '2021-02-20 20:00:00': null,
          '2021-02-20 20:15:00': 0.0,
          '2021-02-20 20:30:00': null,
          '2021-02-20 20:45:00': null,
          '2021-02-20 21:00:00': null,
          '2021-02-20 21:15:00': null,
          '2021-02-20 21:30:00': null,
          '2021-02-20 21:45:00': null,
          '2021-02-20 22:00:00': null,
          '2021-02-20 22:15:00': null,
          '2021-02-20 22:30:00': null,
          '2021-02-20 22:45:00': null,
          '2021-02-20 23:00:00': null,
          '2021-02-20 23:15:00': null,
          '2021-02-20 23:30:00': null,
          '2021-02-20 23:45:00': null,
        },
      ],
      logs: [{ date: '2021-02-22T01:26:37.224', level: 'ERROR', description: '154 active alerts.' }],
    },
    { id: 'PGOM100006', name: 'Faulty Power Plant', dl_status: 4, last_update: null, energy_series: [], logs: [] },
  ],
};
