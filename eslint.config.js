import js from '@eslint/js' // ESLint의 JavaScript 규칙을 가져옵니다.
import globals from 'globals' // 브라우저 환경에서 전역적으로 사용할 수 있는 글로벌 변수들을 정의
import reactHooks from 'eslint-plugin-react-hooks' // React Hooks 관련 ESLint 규칙을 추가
import reactRefresh from 'eslint-plugin-react-refresh' // React Fast Refresh와 관련된 규칙을 추가
import tseslint from 'typescript-eslint' // TypeScript 관련 ESLint 규칙을 추가

//  TypeScript ESLint 규칙을 설정하는 함수
export default tseslint.config(
  // dist 폴더 내 파일들은 ESLint 검사에서 제외
  { ignores: ['dist'] },
  {
    // JavaScript와 TypeScript의 권장 규칙을 확장하여 사용
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    // ts와 tsx 파일에 대해서만 이 ESLint 규칙을 적용
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020, // ECMAScript 2020을 사용하도록 설정
      globals: globals.browser, // 브라우저 환경에서 사용할 수 있는 전역 변수들을 설정
    },
    plugins: {
      'react-hooks': reactHooks, // React Hooks 관련 ESLint 규칙을 사용
      'react-refresh': reactRefresh, // React Fast Refresh 관련 규칙을 사용
    },
    rules: {
      // react-hooks의 권장 규칙들을 추가
      ...reactHooks.configs.recommended.rules,
      // react-refresh/only-export-components: warn 경고를 표시하며, allowConstantExport: true 설정을 통해 상수로 내보내는 컴포넌트를 허용
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
