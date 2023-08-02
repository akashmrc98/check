import Logo from "/public/ai_section/6.jpg";
import DappData from "/public/ai_section/6.jpg";

export const dappData = {
  logo: Logo,
  subLogo: DappData,
  main: "PROVIDER",
  sub: "Native Intelligence",
  title: "Semantic Similarity Binary",
  rating: [0, 1, 2, 3],
  totalRatins: 20,
  about:
    "Semantic Similarity Binary: Provide multiple English texts (limited to 60 words each) and identify whether the texts are semantically similar.",
  tags: ["detection", "paraphrase", "semantic", "similarity"],
  projectUrl: "https://github.com/iktina/semantic-similar",
  organizationId: "naint",
  serviceId: "semantic-similarity-binary",
  contributors: ["John Doe"],
  integration: [
    {
      lang: "Node Js",
      desc: "Download the Node SDK to help you integrate this AI service with your application. Once you setup your configuration, use the token generator below to test the servcie with a number of free calls.",
      steps: [
        {
          title: "Download and extract integration files",
          code: ["cd "],
        },
        {
          title: "Create and activate virtual environment",
          code: [
            "# For unix/macOS:",
            "-sudo apt-get install python3-venv",
            "-sudo python3 -m venv venv",
            "-source ./venv/bin/activate",
            "# For Windows:",
            "-py -m pip install --user virtualenv",
            "-py -m venv venv",
            "-./venv/Scripts/activate",
          ],
        },
        {
          title: "Install python requirements",
          code: [`pip install -r requirement.txt`],
        },
        {
          title: "update config.py with the following points",
          code: [
            "1. update <your wallet's private key> with your wallet's private key",
            "2. update <your infura key> with your infura provider key",
          ],
        },
        {
          title: "update service.py with the following points",
          code: [
            "1. update service_stub with your service stub from <stub>_pb2_grpc.py file",
            "2. update input_method with your service's input method",
            "3. update arguments with your service's arguments",
            "4. update service_method with your service's output method",
            "# This is an example snippet, change accordingly to the interested service",
            `service_client = sdk.create_service_client(
          org_id=config.ORG_ID,
          service_id=config.SERVICE_ID,
          service_stub= example_service_pb2_grpc.CalculatorStub
          )`,
            "request = example_service_pb2.Numbers(a=10, b=2)",
            "response = service_client.service.add(request)",
          ],
        },
        {
          title: "Invoke service by running",
          code: ["python service.py"],
        },
      ],
    },
    {
      lang: "Python",
      desc: "Download the Python SDK to help you integrate this AI service with your application. Once you setup your configuration, use the token generator below to test the servcie with a number of free calls.",
      steps: [
        {
          title: "Download and extract integration files",
          code: ["cd "],
        },
        {
          title: "Create and activate virtual environment",
          code: [
            "# For unix/macOS:",
            "-sudo apt-get install python3-venv",
            "-sudo python3 -m venv venv",
            "-source ./venv/bin/activate",
            "# For Windows:",
            "-py -m pip install --user virtualenv",
            "-py -m venv venv",
            "-./venv/Scripts/activate",
          ],
        },
        {
          title: "Install python requirements",
          code: [`pip install -r requirement.txt`],
        },
        {
          title: "update config.py with the following points",
          code: [
            "1. update <your wallet's private key> with your wallet's private key",
            "2. update <your infura key> with your infura provider key",
          ],
        },
        {
          title: "update service.py with the following points",
          code: [
            "1. update service_stub with your service stub from <stub>_pb2_grpc.py file",
            "2. update input_method with your service's input method",
            "3. update arguments with your service's arguments",
            "4. update service_method with your service's output method",
            "# This is an example snippet, change accordingly to the interested service",
            `service_client = sdk.create_service_client(
          org_id=config.ORG_ID,
          service_id=config.SERVICE_ID,
          service_stub= example_service_pb2_grpc.CalculatorStub
          )`,
            "request = example_service_pb2.Numbers(a=10, b=2)",
            "response = service_client.service.add(request)",
          ],
        },
        {
          title: "Invoke service by running",
          code: ["python service.py"],
        },
      ],
    },
  ],
};

export const recommendationData = [
  {
    title: "Spoken Language Recognition",
    sub: "NATIVE INTELLIGENCE",
    img: Logo,
    desc: "This is a service that automatically recognizes the language of your voice or any other audio track.",
  },
  {
    title: "Semantic Similarity Binary",
    sub: "NATIVE INTELLIGENCE",
    img: Logo,
    desc: "Provide multiple English texts (limited to 60 words each) and identify whether the texts are semantically similar.",
  },
  {
    title: "Multi Speaker Separation",
    sub: "NATIVE INTELLIGENCE",
    img: Logo,
    desc: "Provide multiple English texts (limited to 60 words each) and identify whether the texts are semantically similar.",
  },
];

// This service allows you to share up to two people who can talk at the same time.

// Speech Commands Recognition
// NATIVE INTELLIGENCE
// ★★★★★5.0 (1)
// The service receives an English-speech WAV audio file and outputs the result (one of ten variables) of the speech sample recognition in form of a text.

// Speech Emotion Recognition
// NATIVE INTELLIGENCE
// ★★★★★5.0 (1)
// Submit a WAV file (up to 4 MB and no longer than 90 seconds) with English speech and get an emotion label from the provided WAV file.

// Multilingual Speech Translation
// NATIVE INTELLIGENCE
// ★★★★★5.0 (2)
// This is a translator that will automatically translate your voice or any other audio track with a speech into English

// English Speech Recognition
// NATIVE INTELLIGENCE
// ★★★★★5.0 (1)
// The service performs speech recognition using machine learning techniques.

// Multilingual Speech Recognition
// NATIVE INTELLIGENCE
