import { IncrementalCheckerInterface, ApiIncrementalCheckerParams } from './IncrementalCheckerInterface';
import { CancellationToken } from './CancellationToken';
import { NormalizedMessage } from './NormalizedMessage';
import { CompilerHost } from './CompilerHost';
export declare class ApiIncrementalChecker implements IncrementalCheckerInterface {
    private linterConfig?;
    private linterConfigs;
    protected readonly tsIncrementalCompiler: CompilerHost;
    private linterExclusions;
    private currentLintErrors;
    private currentEsLintErrors;
    private lastUpdatedFiles;
    private lastRemovedFiles;
    private readonly hasFixedConfig;
    private readonly context;
    private readonly createNormalizedMessageFromDiagnostic;
    private readonly linterConfigFile;
    private readonly linterAutoFix;
    private readonly createNormalizedMessageFromRuleFailure;
    private readonly eslinter;
    constructor({ typescript, context, programConfigFile, compilerOptions, createNormalizedMessageFromDiagnostic, linterConfigFile, linterAutoFix, createNormalizedMessageFromRuleFailure, eslinter, checkSyntacticErrors, resolveModuleName, resolveTypeReferenceDirective }: ApiIncrementalCheckerParams);
    private initLinterConfig;
    private getLinterConfig;
    private createLinter;
    hasLinter(): boolean;
    hasEsLinter(): boolean;
    isFileExcluded(filePath: string): boolean;
    nextIteration(): void;
    getDiagnostics(_cancellationToken: CancellationToken): Promise<NormalizedMessage[]>;
    getLints(_cancellationToken: CancellationToken): NormalizedMessage[];
    getEsLints(cancellationToken: CancellationToken): NormalizedMessage[];
}
