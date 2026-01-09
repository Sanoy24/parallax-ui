export interface LeaderboardModel {
  rank: number;
  modelName: string;
  chatbot: number;
  code: number;
  reasoning: number;
  safety: number;
  creativity: number;
  price: string;
  ttft: number;
  lpm: string;
}

export const LEADERBOARD_DATA: LeaderboardModel[] = [
  {
    rank: 1,
    modelName: "GPT-4-turbo-2024-04-09",
    chatbot: 95.8,
    code: 94.2,
    reasoning: 96.7,
    safety: 98.3,
    creativity: 93.6,
    price: "$0.03",
    ttft: 78.6,
    lpm: "1,234,567",
  },
  {
    rank: 2,
    modelName: "Claude-3-Opus-20240229",
    chatbot: 94.5,
    code: 93.8,
    reasoning: 95.2,
    safety: 97.9,
    creativity: 94.1,
    price: "$0.02",
    ttft: 82.3,
    lpm: "1,156,890",
  },
  {
    rank: 3,
    modelName: "Gemini-Advanced-1.5-Pro",
    chatbot: 93.7,
    code: 92.5,
    reasoning: 94.8,
    safety: 96.4,
    creativity: 92.9,
    price: "$0.025",
    ttft: 75.2,
    lpm: "1,089,234",
  },
  {
    rank: 4,
    modelName: "Llama-3-405B-Instruct",
    chatbot: 92.3,
    code: 91.7,
    reasoning: 93.5,
    safety: 95.8,
    creativity: 91.2,
    price: "$0.018",
    ttft: 80.1,
    lpm: "987,654",
  },
  {
    rank: 5,
    modelName: "Mistral-Large-2-123B",
    chatbot: 91.8,
    code: 90.9,
    reasoning: 92.7,
    safety: 94.5,
    creativity: 90.3,
    price: "$0.015",
    ttft: 77.8,
    lpm: "923,456",
  },
  {
    rank: 6,
    modelName: "Command-R-Plus-104B",
    chatbot: 90.5,
    code: 89.8,
    reasoning: 91.3,
    safety: 93.7,
    creativity: 89.6,
    price: "$0.012",
    ttft: 83.5,
    lpm: "856,789",
  },
  {
    rank: 7,
    modelName: "Qwen2.5-72B-Instruct",
    chatbot: 89.2,
    code: 88.6,
    reasoning: 90.1,
    safety: 92.3,
    creativity: 88.4,
    price: "$0.01",
    ttft: 79.2,
    lpm: "789,123",
  },
  {
    rank: 8,
    modelName: "DeepSeek-V2.5-236B-Chat",
    chatbot: 88.7,
    code: 87.9,
    reasoning: 89.5,
    safety: 91.8,
    creativity: 87.2,
    price: "$0.008",
    ttft: 81.6,
    lpm: "734,567",
  },
];
