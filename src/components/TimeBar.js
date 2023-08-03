import { Timeline } from "antd";

function TimeBar() {
  return (
    <Timeline
      pending="未完待续..."
      mode="left"
      items={[
        {
          label: "2018-05-03",
          children: "第一次相遇",
        },
        {
          label: "2018-06-13",
          children: "送花表白",
        },
        {
          label: "2018-06-16",
          children: "天津行",
        },
        {
          label: "2018-06-18",
          children: "正式确定恋爱关系",
        },
        {
          label: "2018-10-01",
          children: "第一次跟我回老家",
        },
        {
          label: "2019-01-01",
          children: "杭州行",
        },
        {
          label: "2019-09-06",
          children: "给你布置生日场景的房间",
        },
        {
          label: "2019-09-12",
          children: "青岛行",
        },
        {
          label: "2020-01-11",
          children: " 去你家吃饭",
        },
        {
          label: "2020-09-30",
          children: "南京行",
        },
        {
          label: "2021-04-03",
          children: "广州深圳行",
        },
        {
          label: "2021-05-29",
          children: "上海行",
        },
        {
          label: "2021-09-20",
          children: "一起去打篮球",
        },
        {
          label: "2022-01-22",
          children: "颐和园滑雪",
        },
        {
          label: "2022-08-13",
          children: "环球影城行",
        },
        {
          label: "2023-01-28",
          children: "去你家吃饭",
        },
        {
          label: "2023-10-02",
          children: "我们结婚啦",
        },
      ]}
    />
  );
}

export default TimeBar;
