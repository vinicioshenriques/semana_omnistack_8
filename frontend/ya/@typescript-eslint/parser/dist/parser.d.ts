import { TSESLint } from '@typescript-eslint/experimental-utils';
import { AST_NODE_TYPES, ParserServices } from '@typescript-eslint/typescript-estree';
import { analyzeScope } from './analyze-scope';
import { visitorKeys } from './visitor-keys';
declare type ParserOptions = TSESLint.ParserOptions;
interface ParseForESLintResult {
    ast: any;
    services: ParserServices;
    visitorKeys: typeof visitorKeys;
    scopeManager: ReturnType<typeof analyzeScope>;
}
export declare const version: any;
export declare const Syntax: Readonly<typeof AST_NODE_TYPES>;
export declare function parse(code: string, options?: ParserOptions): any;
export declare function parseForESLint(code: string, options?: ParserOptions | null): ParseForESLintResult;
export { ParserServices, ParserOptions };
//# sourceMappingURL=parser.d.ts.map