// 기본 컨텐츠 생성형 AI
import { GoogleGenAI } from "@google/genai";
// 환경 변수 GEMINI API KEY
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// AI 객체 생성
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

// AI Chat 객체 생성
const chat = ai.chats.create({
  model: "gemini-2.5-flash",
});

// 응답 스키마
const responseSchema = {
  type: "object",
  properties: {
    // 객체의 속성들
    isMemo: {
      type: "boolean",
      description: "할 일, 메모, 업무, 계획 등 관련 여부",
    },
    content: {
      type: "string",
      description: "할 일 내용(본문)",
    },
    dueDate: {
      type: "string",
      description: "할 일 마감 기한(YYYY-MM-DD)",
    },
  },
  required: ["isMemo", "content", "dueDate"],
  additionalProperties: false,
};

// 응답 파라미터 설정
// const config = {
//   temperature: 1, //창의성 수준 (0~1).
//   maxOutputTokens: 1000, // 응답 최대 토큰 수 (최대 8192??)
//   stopSequences: "\\n\\n",
//   //시스템 지침 속성
//   systemInstruction: [
//     "당신은 전문 IT 개발자 입니다.",
//     "오로지 JavaScript 개발 개념에 대한 질문에만 답변 해야 합니다",
//     "JavaScript 개발 개념 질문이 아니면 '답변 할 수 없습니다' 라고 답변합니다",
//   ],
// };

const config = {
  responseMimeType: "application/json", // 응답 형식(확장자)
  responseJsonSchema: responseSchema, // 응답 JSON 구조
};

export { ai, chat, config };
