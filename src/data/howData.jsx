export const howData = [
  {
    whom: "INDIVIDUAL",
    img: "",
    steps: [
      { title: "Obtain CGPT tokens", type: "SIMPLE" },
      {
        title: "Choose between one of our plans",
        type: "PLAN",
        plans: [
          {
            plan: "FREE PLAN",
            type: "Limited Access",
            key: "0 OPAI",
            value: "PER REQUEST",
          },
          {
            plan: "PPP PLAN",
            type: "Premium Access",
            key: "0.1 OPAI",
            value: "PER REQUEST",
          },
        ],
      },
      {
        title: "Stake $CGPT for Freemium",
        quote: "ALTERNATIVELY...",
        type: "ALTERNATIVE",
        sub: "Stake over 10,000 CGPT tokens for unlimited access without spending CGPT tokens.",
      },
    ],
  },

  {
    whom: "BUSINESSES",
    img: "",
    steps: [
      { title: "Obtain CGPT tokens", type: "SIMPLE" },
      { title: "Deposit to your account balance", type: "SIMPLE" },
      { title: "Generate an API key", type: "SIMPLE" },
      {
        title: "Enjoy",
        quote: "..",
        type: "ALTERNATIVE",
        sub: "The benefits of ChainGPT AI within your business or application.",
      },
    ],
  },
];
