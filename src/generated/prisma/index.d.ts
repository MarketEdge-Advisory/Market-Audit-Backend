
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AuditTemplate
 * 
 */
export type AuditTemplate = $Result.DefaultSelection<Prisma.$AuditTemplatePayload>
/**
 * Model AuditSection
 * 
 */
export type AuditSection = $Result.DefaultSelection<Prisma.$AuditSectionPayload>
/**
 * Model AuditQuestion
 * 
 */
export type AuditQuestion = $Result.DefaultSelection<Prisma.$AuditQuestionPayload>
/**
 * Model AuditOption
 * 
 */
export type AuditOption = $Result.DefaultSelection<Prisma.$AuditOptionPayload>
/**
 * Model AuditSession
 * 
 */
export type AuditSession = $Result.DefaultSelection<Prisma.$AuditSessionPayload>
/**
 * Model AuditAnswer
 * 
 */
export type AuditAnswer = $Result.DefaultSelection<Prisma.$AuditAnswerPayload>
/**
 * Model AuditResult
 * 
 */
export type AuditResult = $Result.DefaultSelection<Prisma.$AuditResultPayload>
/**
 * Model AuditLead
 * 
 */
export type AuditLead = $Result.DefaultSelection<Prisma.$AuditLeadPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SessionStatus: {
  in_progress: 'in_progress',
  completed: 'completed'
};

export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus]

}

export type SessionStatus = $Enums.SessionStatus

export const SessionStatus: typeof $Enums.SessionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AuditTemplates
 * const auditTemplates = await prisma.auditTemplate.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AuditTemplates
   * const auditTemplates = await prisma.auditTemplate.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.auditTemplate`: Exposes CRUD operations for the **AuditTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditTemplates
    * const auditTemplates = await prisma.auditTemplate.findMany()
    * ```
    */
  get auditTemplate(): Prisma.AuditTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditSection`: Exposes CRUD operations for the **AuditSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditSections
    * const auditSections = await prisma.auditSection.findMany()
    * ```
    */
  get auditSection(): Prisma.AuditSectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditQuestion`: Exposes CRUD operations for the **AuditQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditQuestions
    * const auditQuestions = await prisma.auditQuestion.findMany()
    * ```
    */
  get auditQuestion(): Prisma.AuditQuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditOption`: Exposes CRUD operations for the **AuditOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditOptions
    * const auditOptions = await prisma.auditOption.findMany()
    * ```
    */
  get auditOption(): Prisma.AuditOptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditSession`: Exposes CRUD operations for the **AuditSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditSessions
    * const auditSessions = await prisma.auditSession.findMany()
    * ```
    */
  get auditSession(): Prisma.AuditSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditAnswer`: Exposes CRUD operations for the **AuditAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditAnswers
    * const auditAnswers = await prisma.auditAnswer.findMany()
    * ```
    */
  get auditAnswer(): Prisma.AuditAnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditResult`: Exposes CRUD operations for the **AuditResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditResults
    * const auditResults = await prisma.auditResult.findMany()
    * ```
    */
  get auditResult(): Prisma.AuditResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLead`: Exposes CRUD operations for the **AuditLead** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLeads
    * const auditLeads = await prisma.auditLead.findMany()
    * ```
    */
  get auditLead(): Prisma.AuditLeadDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AuditTemplate: 'AuditTemplate',
    AuditSection: 'AuditSection',
    AuditQuestion: 'AuditQuestion',
    AuditOption: 'AuditOption',
    AuditSession: 'AuditSession',
    AuditAnswer: 'AuditAnswer',
    AuditResult: 'AuditResult',
    AuditLead: 'AuditLead'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "auditTemplate" | "auditSection" | "auditQuestion" | "auditOption" | "auditSession" | "auditAnswer" | "auditResult" | "auditLead"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AuditTemplate: {
        payload: Prisma.$AuditTemplatePayload<ExtArgs>
        fields: Prisma.AuditTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditTemplatePayload>
          }
          findFirst: {
            args: Prisma.AuditTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditTemplatePayload>
          }
          findMany: {
            args: Prisma.AuditTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditTemplatePayload>[]
          }
          create: {
            args: Prisma.AuditTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditTemplatePayload>
          }
          createMany: {
            args: Prisma.AuditTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditTemplatePayload>[]
          }
          delete: {
            args: Prisma.AuditTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditTemplatePayload>
          }
          update: {
            args: Prisma.AuditTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditTemplatePayload>
          }
          deleteMany: {
            args: Prisma.AuditTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditTemplatePayload>[]
          }
          upsert: {
            args: Prisma.AuditTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditTemplatePayload>
          }
          aggregate: {
            args: Prisma.AuditTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditTemplate>
          }
          groupBy: {
            args: Prisma.AuditTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<AuditTemplateCountAggregateOutputType> | number
          }
        }
      }
      AuditSection: {
        payload: Prisma.$AuditSectionPayload<ExtArgs>
        fields: Prisma.AuditSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditSectionPayload>
          }
          findFirst: {
            args: Prisma.AuditSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditSectionPayload>
          }
          findMany: {
            args: Prisma.AuditSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditSectionPayload>[]
          }
          create: {
            args: Prisma.AuditSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditSectionPayload>
          }
          createMany: {
            args: Prisma.AuditSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditSectionPayload>[]
          }
          delete: {
            args: Prisma.AuditSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditSectionPayload>
          }
          update: {
            args: Prisma.AuditSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditSectionPayload>
          }
          deleteMany: {
            args: Prisma.AuditSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditSectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditSectionPayload>[]
          }
          upsert: {
            args: Prisma.AuditSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditSectionPayload>
          }
          aggregate: {
            args: Prisma.AuditSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditSection>
          }
          groupBy: {
            args: Prisma.AuditSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditSectionCountArgs<ExtArgs>
            result: $Utils.Optional<AuditSectionCountAggregateOutputType> | number
          }
        }
      }
      AuditQuestion: {
        payload: Prisma.$AuditQuestionPayload<ExtArgs>
        fields: Prisma.AuditQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditQuestionPayload>
          }
          findFirst: {
            args: Prisma.AuditQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditQuestionPayload>
          }
          findMany: {
            args: Prisma.AuditQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditQuestionPayload>[]
          }
          create: {
            args: Prisma.AuditQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditQuestionPayload>
          }
          createMany: {
            args: Prisma.AuditQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditQuestionPayload>[]
          }
          delete: {
            args: Prisma.AuditQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditQuestionPayload>
          }
          update: {
            args: Prisma.AuditQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditQuestionPayload>
          }
          deleteMany: {
            args: Prisma.AuditQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditQuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditQuestionPayload>[]
          }
          upsert: {
            args: Prisma.AuditQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditQuestionPayload>
          }
          aggregate: {
            args: Prisma.AuditQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditQuestion>
          }
          groupBy: {
            args: Prisma.AuditQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<AuditQuestionCountAggregateOutputType> | number
          }
        }
      }
      AuditOption: {
        payload: Prisma.$AuditOptionPayload<ExtArgs>
        fields: Prisma.AuditOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditOptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditOptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditOptionPayload>
          }
          findFirst: {
            args: Prisma.AuditOptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditOptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditOptionPayload>
          }
          findMany: {
            args: Prisma.AuditOptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditOptionPayload>[]
          }
          create: {
            args: Prisma.AuditOptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditOptionPayload>
          }
          createMany: {
            args: Prisma.AuditOptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditOptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditOptionPayload>[]
          }
          delete: {
            args: Prisma.AuditOptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditOptionPayload>
          }
          update: {
            args: Prisma.AuditOptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditOptionPayload>
          }
          deleteMany: {
            args: Prisma.AuditOptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditOptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditOptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditOptionPayload>[]
          }
          upsert: {
            args: Prisma.AuditOptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditOptionPayload>
          }
          aggregate: {
            args: Prisma.AuditOptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditOption>
          }
          groupBy: {
            args: Prisma.AuditOptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditOptionCountArgs<ExtArgs>
            result: $Utils.Optional<AuditOptionCountAggregateOutputType> | number
          }
        }
      }
      AuditSession: {
        payload: Prisma.$AuditSessionPayload<ExtArgs>
        fields: Prisma.AuditSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditSessionPayload>
          }
          findFirst: {
            args: Prisma.AuditSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditSessionPayload>
          }
          findMany: {
            args: Prisma.AuditSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditSessionPayload>[]
          }
          create: {
            args: Prisma.AuditSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditSessionPayload>
          }
          createMany: {
            args: Prisma.AuditSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditSessionPayload>[]
          }
          delete: {
            args: Prisma.AuditSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditSessionPayload>
          }
          update: {
            args: Prisma.AuditSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditSessionPayload>
          }
          deleteMany: {
            args: Prisma.AuditSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditSessionPayload>[]
          }
          upsert: {
            args: Prisma.AuditSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditSessionPayload>
          }
          aggregate: {
            args: Prisma.AuditSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditSession>
          }
          groupBy: {
            args: Prisma.AuditSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditSessionCountArgs<ExtArgs>
            result: $Utils.Optional<AuditSessionCountAggregateOutputType> | number
          }
        }
      }
      AuditAnswer: {
        payload: Prisma.$AuditAnswerPayload<ExtArgs>
        fields: Prisma.AuditAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditAnswerPayload>
          }
          findFirst: {
            args: Prisma.AuditAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditAnswerPayload>
          }
          findMany: {
            args: Prisma.AuditAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditAnswerPayload>[]
          }
          create: {
            args: Prisma.AuditAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditAnswerPayload>
          }
          createMany: {
            args: Prisma.AuditAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditAnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditAnswerPayload>[]
          }
          delete: {
            args: Prisma.AuditAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditAnswerPayload>
          }
          update: {
            args: Prisma.AuditAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditAnswerPayload>
          }
          deleteMany: {
            args: Prisma.AuditAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditAnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditAnswerPayload>[]
          }
          upsert: {
            args: Prisma.AuditAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditAnswerPayload>
          }
          aggregate: {
            args: Prisma.AuditAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditAnswer>
          }
          groupBy: {
            args: Prisma.AuditAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditAnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<AuditAnswerCountAggregateOutputType> | number
          }
        }
      }
      AuditResult: {
        payload: Prisma.$AuditResultPayload<ExtArgs>
        fields: Prisma.AuditResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditResultPayload>
          }
          findFirst: {
            args: Prisma.AuditResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditResultPayload>
          }
          findMany: {
            args: Prisma.AuditResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditResultPayload>[]
          }
          create: {
            args: Prisma.AuditResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditResultPayload>
          }
          createMany: {
            args: Prisma.AuditResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditResultPayload>[]
          }
          delete: {
            args: Prisma.AuditResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditResultPayload>
          }
          update: {
            args: Prisma.AuditResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditResultPayload>
          }
          deleteMany: {
            args: Prisma.AuditResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditResultPayload>[]
          }
          upsert: {
            args: Prisma.AuditResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditResultPayload>
          }
          aggregate: {
            args: Prisma.AuditResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditResult>
          }
          groupBy: {
            args: Prisma.AuditResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditResultCountArgs<ExtArgs>
            result: $Utils.Optional<AuditResultCountAggregateOutputType> | number
          }
        }
      }
      AuditLead: {
        payload: Prisma.$AuditLeadPayload<ExtArgs>
        fields: Prisma.AuditLeadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLeadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLeadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLeadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLeadPayload>
          }
          findFirst: {
            args: Prisma.AuditLeadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLeadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLeadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLeadPayload>
          }
          findMany: {
            args: Prisma.AuditLeadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLeadPayload>[]
          }
          create: {
            args: Prisma.AuditLeadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLeadPayload>
          }
          createMany: {
            args: Prisma.AuditLeadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLeadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLeadPayload>[]
          }
          delete: {
            args: Prisma.AuditLeadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLeadPayload>
          }
          update: {
            args: Prisma.AuditLeadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLeadPayload>
          }
          deleteMany: {
            args: Prisma.AuditLeadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLeadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLeadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLeadPayload>[]
          }
          upsert: {
            args: Prisma.AuditLeadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLeadPayload>
          }
          aggregate: {
            args: Prisma.AuditLeadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLead>
          }
          groupBy: {
            args: Prisma.AuditLeadGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLeadGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLeadCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLeadCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    auditTemplate?: AuditTemplateOmit
    auditSection?: AuditSectionOmit
    auditQuestion?: AuditQuestionOmit
    auditOption?: AuditOptionOmit
    auditSession?: AuditSessionOmit
    auditAnswer?: AuditAnswerOmit
    auditResult?: AuditResultOmit
    auditLead?: AuditLeadOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AuditTemplateCountOutputType
   */

  export type AuditTemplateCountOutputType = {
    sections: number
    sessions: number
  }

  export type AuditTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | AuditTemplateCountOutputTypeCountSectionsArgs
    sessions?: boolean | AuditTemplateCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * AuditTemplateCountOutputType without action
   */
  export type AuditTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTemplateCountOutputType
     */
    select?: AuditTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuditTemplateCountOutputType without action
   */
  export type AuditTemplateCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditSectionWhereInput
  }

  /**
   * AuditTemplateCountOutputType without action
   */
  export type AuditTemplateCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditSessionWhereInput
  }


  /**
   * Count Type AuditSectionCountOutputType
   */

  export type AuditSectionCountOutputType = {
    questions: number
  }

  export type AuditSectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | AuditSectionCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * AuditSectionCountOutputType without action
   */
  export type AuditSectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSectionCountOutputType
     */
    select?: AuditSectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuditSectionCountOutputType without action
   */
  export type AuditSectionCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditQuestionWhereInput
  }


  /**
   * Count Type AuditQuestionCountOutputType
   */

  export type AuditQuestionCountOutputType = {
    options: number
    answers: number
  }

  export type AuditQuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | AuditQuestionCountOutputTypeCountOptionsArgs
    answers?: boolean | AuditQuestionCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * AuditQuestionCountOutputType without action
   */
  export type AuditQuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditQuestionCountOutputType
     */
    select?: AuditQuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuditQuestionCountOutputType without action
   */
  export type AuditQuestionCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditOptionWhereInput
  }

  /**
   * AuditQuestionCountOutputType without action
   */
  export type AuditQuestionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditAnswerWhereInput
  }


  /**
   * Count Type AuditOptionCountOutputType
   */

  export type AuditOptionCountOutputType = {
    answers: number
  }

  export type AuditOptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | AuditOptionCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * AuditOptionCountOutputType without action
   */
  export type AuditOptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditOptionCountOutputType
     */
    select?: AuditOptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuditOptionCountOutputType without action
   */
  export type AuditOptionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditAnswerWhereInput
  }


  /**
   * Count Type AuditSessionCountOutputType
   */

  export type AuditSessionCountOutputType = {
    answers: number
  }

  export type AuditSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | AuditSessionCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * AuditSessionCountOutputType without action
   */
  export type AuditSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSessionCountOutputType
     */
    select?: AuditSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuditSessionCountOutputType without action
   */
  export type AuditSessionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditAnswerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AuditTemplate
   */

  export type AggregateAuditTemplate = {
    _count: AuditTemplateCountAggregateOutputType | null
    _avg: AuditTemplateAvgAggregateOutputType | null
    _sum: AuditTemplateSumAggregateOutputType | null
    _min: AuditTemplateMinAggregateOutputType | null
    _max: AuditTemplateMaxAggregateOutputType | null
  }

  export type AuditTemplateAvgAggregateOutputType = {
    version: number | null
    maxScore: number | null
  }

  export type AuditTemplateSumAggregateOutputType = {
    version: number | null
    maxScore: number | null
  }

  export type AuditTemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    version: number | null
    isActive: boolean | null
    maxScore: number | null
    createdAt: Date | null
  }

  export type AuditTemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    version: number | null
    isActive: boolean | null
    maxScore: number | null
    createdAt: Date | null
  }

  export type AuditTemplateCountAggregateOutputType = {
    id: number
    name: number
    version: number
    isActive: number
    maxScore: number
    createdAt: number
    _all: number
  }


  export type AuditTemplateAvgAggregateInputType = {
    version?: true
    maxScore?: true
  }

  export type AuditTemplateSumAggregateInputType = {
    version?: true
    maxScore?: true
  }

  export type AuditTemplateMinAggregateInputType = {
    id?: true
    name?: true
    version?: true
    isActive?: true
    maxScore?: true
    createdAt?: true
  }

  export type AuditTemplateMaxAggregateInputType = {
    id?: true
    name?: true
    version?: true
    isActive?: true
    maxScore?: true
    createdAt?: true
  }

  export type AuditTemplateCountAggregateInputType = {
    id?: true
    name?: true
    version?: true
    isActive?: true
    maxScore?: true
    createdAt?: true
    _all?: true
  }

  export type AuditTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditTemplate to aggregate.
     */
    where?: AuditTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditTemplates to fetch.
     */
    orderBy?: AuditTemplateOrderByWithRelationInput | AuditTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditTemplates
    **/
    _count?: true | AuditTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditTemplateMaxAggregateInputType
  }

  export type GetAuditTemplateAggregateType<T extends AuditTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditTemplate[P]>
      : GetScalarType<T[P], AggregateAuditTemplate[P]>
  }




  export type AuditTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditTemplateWhereInput
    orderBy?: AuditTemplateOrderByWithAggregationInput | AuditTemplateOrderByWithAggregationInput[]
    by: AuditTemplateScalarFieldEnum[] | AuditTemplateScalarFieldEnum
    having?: AuditTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditTemplateCountAggregateInputType | true
    _avg?: AuditTemplateAvgAggregateInputType
    _sum?: AuditTemplateSumAggregateInputType
    _min?: AuditTemplateMinAggregateInputType
    _max?: AuditTemplateMaxAggregateInputType
  }

  export type AuditTemplateGroupByOutputType = {
    id: string
    name: string
    version: number
    isActive: boolean
    maxScore: number
    createdAt: Date
    _count: AuditTemplateCountAggregateOutputType | null
    _avg: AuditTemplateAvgAggregateOutputType | null
    _sum: AuditTemplateSumAggregateOutputType | null
    _min: AuditTemplateMinAggregateOutputType | null
    _max: AuditTemplateMaxAggregateOutputType | null
  }

  type GetAuditTemplateGroupByPayload<T extends AuditTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], AuditTemplateGroupByOutputType[P]>
        }
      >
    >


  export type AuditTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    version?: boolean
    isActive?: boolean
    maxScore?: boolean
    createdAt?: boolean
    sections?: boolean | AuditTemplate$sectionsArgs<ExtArgs>
    sessions?: boolean | AuditTemplate$sessionsArgs<ExtArgs>
    _count?: boolean | AuditTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditTemplate"]>

  export type AuditTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    version?: boolean
    isActive?: boolean
    maxScore?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditTemplate"]>

  export type AuditTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    version?: boolean
    isActive?: boolean
    maxScore?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditTemplate"]>

  export type AuditTemplateSelectScalar = {
    id?: boolean
    name?: boolean
    version?: boolean
    isActive?: boolean
    maxScore?: boolean
    createdAt?: boolean
  }

  export type AuditTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "version" | "isActive" | "maxScore" | "createdAt", ExtArgs["result"]["auditTemplate"]>
  export type AuditTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | AuditTemplate$sectionsArgs<ExtArgs>
    sessions?: boolean | AuditTemplate$sessionsArgs<ExtArgs>
    _count?: boolean | AuditTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AuditTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AuditTemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AuditTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditTemplate"
    objects: {
      sections: Prisma.$AuditSectionPayload<ExtArgs>[]
      sessions: Prisma.$AuditSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      version: number
      isActive: boolean
      maxScore: number
      createdAt: Date
    }, ExtArgs["result"]["auditTemplate"]>
    composites: {}
  }

  type AuditTemplateGetPayload<S extends boolean | null | undefined | AuditTemplateDefaultArgs> = $Result.GetResult<Prisma.$AuditTemplatePayload, S>

  type AuditTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditTemplateCountAggregateInputType | true
    }

  export interface AuditTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditTemplate'], meta: { name: 'AuditTemplate' } }
    /**
     * Find zero or one AuditTemplate that matches the filter.
     * @param {AuditTemplateFindUniqueArgs} args - Arguments to find a AuditTemplate
     * @example
     * // Get one AuditTemplate
     * const auditTemplate = await prisma.auditTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditTemplateFindUniqueArgs>(args: SelectSubset<T, AuditTemplateFindUniqueArgs<ExtArgs>>): Prisma__AuditTemplateClient<$Result.GetResult<Prisma.$AuditTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditTemplateFindUniqueOrThrowArgs} args - Arguments to find a AuditTemplate
     * @example
     * // Get one AuditTemplate
     * const auditTemplate = await prisma.auditTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditTemplateClient<$Result.GetResult<Prisma.$AuditTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditTemplateFindFirstArgs} args - Arguments to find a AuditTemplate
     * @example
     * // Get one AuditTemplate
     * const auditTemplate = await prisma.auditTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditTemplateFindFirstArgs>(args?: SelectSubset<T, AuditTemplateFindFirstArgs<ExtArgs>>): Prisma__AuditTemplateClient<$Result.GetResult<Prisma.$AuditTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditTemplateFindFirstOrThrowArgs} args - Arguments to find a AuditTemplate
     * @example
     * // Get one AuditTemplate
     * const auditTemplate = await prisma.auditTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditTemplateClient<$Result.GetResult<Prisma.$AuditTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditTemplates
     * const auditTemplates = await prisma.auditTemplate.findMany()
     * 
     * // Get first 10 AuditTemplates
     * const auditTemplates = await prisma.auditTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditTemplateWithIdOnly = await prisma.auditTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditTemplateFindManyArgs>(args?: SelectSubset<T, AuditTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditTemplate.
     * @param {AuditTemplateCreateArgs} args - Arguments to create a AuditTemplate.
     * @example
     * // Create one AuditTemplate
     * const AuditTemplate = await prisma.auditTemplate.create({
     *   data: {
     *     // ... data to create a AuditTemplate
     *   }
     * })
     * 
     */
    create<T extends AuditTemplateCreateArgs>(args: SelectSubset<T, AuditTemplateCreateArgs<ExtArgs>>): Prisma__AuditTemplateClient<$Result.GetResult<Prisma.$AuditTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditTemplates.
     * @param {AuditTemplateCreateManyArgs} args - Arguments to create many AuditTemplates.
     * @example
     * // Create many AuditTemplates
     * const auditTemplate = await prisma.auditTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditTemplateCreateManyArgs>(args?: SelectSubset<T, AuditTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditTemplates and returns the data saved in the database.
     * @param {AuditTemplateCreateManyAndReturnArgs} args - Arguments to create many AuditTemplates.
     * @example
     * // Create many AuditTemplates
     * const auditTemplate = await prisma.auditTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditTemplates and only return the `id`
     * const auditTemplateWithIdOnly = await prisma.auditTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditTemplate.
     * @param {AuditTemplateDeleteArgs} args - Arguments to delete one AuditTemplate.
     * @example
     * // Delete one AuditTemplate
     * const AuditTemplate = await prisma.auditTemplate.delete({
     *   where: {
     *     // ... filter to delete one AuditTemplate
     *   }
     * })
     * 
     */
    delete<T extends AuditTemplateDeleteArgs>(args: SelectSubset<T, AuditTemplateDeleteArgs<ExtArgs>>): Prisma__AuditTemplateClient<$Result.GetResult<Prisma.$AuditTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditTemplate.
     * @param {AuditTemplateUpdateArgs} args - Arguments to update one AuditTemplate.
     * @example
     * // Update one AuditTemplate
     * const auditTemplate = await prisma.auditTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditTemplateUpdateArgs>(args: SelectSubset<T, AuditTemplateUpdateArgs<ExtArgs>>): Prisma__AuditTemplateClient<$Result.GetResult<Prisma.$AuditTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditTemplates.
     * @param {AuditTemplateDeleteManyArgs} args - Arguments to filter AuditTemplates to delete.
     * @example
     * // Delete a few AuditTemplates
     * const { count } = await prisma.auditTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditTemplateDeleteManyArgs>(args?: SelectSubset<T, AuditTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditTemplates
     * const auditTemplate = await prisma.auditTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditTemplateUpdateManyArgs>(args: SelectSubset<T, AuditTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditTemplates and returns the data updated in the database.
     * @param {AuditTemplateUpdateManyAndReturnArgs} args - Arguments to update many AuditTemplates.
     * @example
     * // Update many AuditTemplates
     * const auditTemplate = await prisma.auditTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditTemplates and only return the `id`
     * const auditTemplateWithIdOnly = await prisma.auditTemplate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditTemplate.
     * @param {AuditTemplateUpsertArgs} args - Arguments to update or create a AuditTemplate.
     * @example
     * // Update or create a AuditTemplate
     * const auditTemplate = await prisma.auditTemplate.upsert({
     *   create: {
     *     // ... data to create a AuditTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditTemplate we want to update
     *   }
     * })
     */
    upsert<T extends AuditTemplateUpsertArgs>(args: SelectSubset<T, AuditTemplateUpsertArgs<ExtArgs>>): Prisma__AuditTemplateClient<$Result.GetResult<Prisma.$AuditTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditTemplateCountArgs} args - Arguments to filter AuditTemplates to count.
     * @example
     * // Count the number of AuditTemplates
     * const count = await prisma.auditTemplate.count({
     *   where: {
     *     // ... the filter for the AuditTemplates we want to count
     *   }
     * })
    **/
    count<T extends AuditTemplateCountArgs>(
      args?: Subset<T, AuditTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditTemplateAggregateArgs>(args: Subset<T, AuditTemplateAggregateArgs>): Prisma.PrismaPromise<GetAuditTemplateAggregateType<T>>

    /**
     * Group by AuditTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditTemplateGroupByArgs['orderBy'] }
        : { orderBy?: AuditTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditTemplate model
   */
  readonly fields: AuditTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sections<T extends AuditTemplate$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, AuditTemplate$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends AuditTemplate$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, AuditTemplate$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditTemplate model
   */
  interface AuditTemplateFieldRefs {
    readonly id: FieldRef<"AuditTemplate", 'String'>
    readonly name: FieldRef<"AuditTemplate", 'String'>
    readonly version: FieldRef<"AuditTemplate", 'Int'>
    readonly isActive: FieldRef<"AuditTemplate", 'Boolean'>
    readonly maxScore: FieldRef<"AuditTemplate", 'Int'>
    readonly createdAt: FieldRef<"AuditTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditTemplate findUnique
   */
  export type AuditTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTemplate
     */
    select?: AuditTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditTemplate
     */
    omit?: AuditTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditTemplateInclude<ExtArgs> | null
    /**
     * Filter, which AuditTemplate to fetch.
     */
    where: AuditTemplateWhereUniqueInput
  }

  /**
   * AuditTemplate findUniqueOrThrow
   */
  export type AuditTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTemplate
     */
    select?: AuditTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditTemplate
     */
    omit?: AuditTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditTemplateInclude<ExtArgs> | null
    /**
     * Filter, which AuditTemplate to fetch.
     */
    where: AuditTemplateWhereUniqueInput
  }

  /**
   * AuditTemplate findFirst
   */
  export type AuditTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTemplate
     */
    select?: AuditTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditTemplate
     */
    omit?: AuditTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditTemplateInclude<ExtArgs> | null
    /**
     * Filter, which AuditTemplate to fetch.
     */
    where?: AuditTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditTemplates to fetch.
     */
    orderBy?: AuditTemplateOrderByWithRelationInput | AuditTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditTemplates.
     */
    cursor?: AuditTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditTemplates.
     */
    distinct?: AuditTemplateScalarFieldEnum | AuditTemplateScalarFieldEnum[]
  }

  /**
   * AuditTemplate findFirstOrThrow
   */
  export type AuditTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTemplate
     */
    select?: AuditTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditTemplate
     */
    omit?: AuditTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditTemplateInclude<ExtArgs> | null
    /**
     * Filter, which AuditTemplate to fetch.
     */
    where?: AuditTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditTemplates to fetch.
     */
    orderBy?: AuditTemplateOrderByWithRelationInput | AuditTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditTemplates.
     */
    cursor?: AuditTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditTemplates.
     */
    distinct?: AuditTemplateScalarFieldEnum | AuditTemplateScalarFieldEnum[]
  }

  /**
   * AuditTemplate findMany
   */
  export type AuditTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTemplate
     */
    select?: AuditTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditTemplate
     */
    omit?: AuditTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditTemplateInclude<ExtArgs> | null
    /**
     * Filter, which AuditTemplates to fetch.
     */
    where?: AuditTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditTemplates to fetch.
     */
    orderBy?: AuditTemplateOrderByWithRelationInput | AuditTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditTemplates.
     */
    cursor?: AuditTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditTemplates.
     */
    skip?: number
    distinct?: AuditTemplateScalarFieldEnum | AuditTemplateScalarFieldEnum[]
  }

  /**
   * AuditTemplate create
   */
  export type AuditTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTemplate
     */
    select?: AuditTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditTemplate
     */
    omit?: AuditTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditTemplate.
     */
    data: XOR<AuditTemplateCreateInput, AuditTemplateUncheckedCreateInput>
  }

  /**
   * AuditTemplate createMany
   */
  export type AuditTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditTemplates.
     */
    data: AuditTemplateCreateManyInput | AuditTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditTemplate createManyAndReturn
   */
  export type AuditTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTemplate
     */
    select?: AuditTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditTemplate
     */
    omit?: AuditTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many AuditTemplates.
     */
    data: AuditTemplateCreateManyInput | AuditTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditTemplate update
   */
  export type AuditTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTemplate
     */
    select?: AuditTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditTemplate
     */
    omit?: AuditTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditTemplate.
     */
    data: XOR<AuditTemplateUpdateInput, AuditTemplateUncheckedUpdateInput>
    /**
     * Choose, which AuditTemplate to update.
     */
    where: AuditTemplateWhereUniqueInput
  }

  /**
   * AuditTemplate updateMany
   */
  export type AuditTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditTemplates.
     */
    data: XOR<AuditTemplateUpdateManyMutationInput, AuditTemplateUncheckedUpdateManyInput>
    /**
     * Filter which AuditTemplates to update
     */
    where?: AuditTemplateWhereInput
    /**
     * Limit how many AuditTemplates to update.
     */
    limit?: number
  }

  /**
   * AuditTemplate updateManyAndReturn
   */
  export type AuditTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTemplate
     */
    select?: AuditTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditTemplate
     */
    omit?: AuditTemplateOmit<ExtArgs> | null
    /**
     * The data used to update AuditTemplates.
     */
    data: XOR<AuditTemplateUpdateManyMutationInput, AuditTemplateUncheckedUpdateManyInput>
    /**
     * Filter which AuditTemplates to update
     */
    where?: AuditTemplateWhereInput
    /**
     * Limit how many AuditTemplates to update.
     */
    limit?: number
  }

  /**
   * AuditTemplate upsert
   */
  export type AuditTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTemplate
     */
    select?: AuditTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditTemplate
     */
    omit?: AuditTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditTemplate to update in case it exists.
     */
    where: AuditTemplateWhereUniqueInput
    /**
     * In case the AuditTemplate found by the `where` argument doesn't exist, create a new AuditTemplate with this data.
     */
    create: XOR<AuditTemplateCreateInput, AuditTemplateUncheckedCreateInput>
    /**
     * In case the AuditTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditTemplateUpdateInput, AuditTemplateUncheckedUpdateInput>
  }

  /**
   * AuditTemplate delete
   */
  export type AuditTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTemplate
     */
    select?: AuditTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditTemplate
     */
    omit?: AuditTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditTemplateInclude<ExtArgs> | null
    /**
     * Filter which AuditTemplate to delete.
     */
    where: AuditTemplateWhereUniqueInput
  }

  /**
   * AuditTemplate deleteMany
   */
  export type AuditTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditTemplates to delete
     */
    where?: AuditTemplateWhereInput
    /**
     * Limit how many AuditTemplates to delete.
     */
    limit?: number
  }

  /**
   * AuditTemplate.sections
   */
  export type AuditTemplate$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSection
     */
    select?: AuditSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSection
     */
    omit?: AuditSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSectionInclude<ExtArgs> | null
    where?: AuditSectionWhereInput
    orderBy?: AuditSectionOrderByWithRelationInput | AuditSectionOrderByWithRelationInput[]
    cursor?: AuditSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditSectionScalarFieldEnum | AuditSectionScalarFieldEnum[]
  }

  /**
   * AuditTemplate.sessions
   */
  export type AuditTemplate$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSession
     */
    select?: AuditSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSession
     */
    omit?: AuditSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSessionInclude<ExtArgs> | null
    where?: AuditSessionWhereInput
    orderBy?: AuditSessionOrderByWithRelationInput | AuditSessionOrderByWithRelationInput[]
    cursor?: AuditSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditSessionScalarFieldEnum | AuditSessionScalarFieldEnum[]
  }

  /**
   * AuditTemplate without action
   */
  export type AuditTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTemplate
     */
    select?: AuditTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditTemplate
     */
    omit?: AuditTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditTemplateInclude<ExtArgs> | null
  }


  /**
   * Model AuditSection
   */

  export type AggregateAuditSection = {
    _count: AuditSectionCountAggregateOutputType | null
    _avg: AuditSectionAvgAggregateOutputType | null
    _sum: AuditSectionSumAggregateOutputType | null
    _min: AuditSectionMinAggregateOutputType | null
    _max: AuditSectionMaxAggregateOutputType | null
  }

  export type AuditSectionAvgAggregateOutputType = {
    sortOrder: number | null
    maxScore: number | null
  }

  export type AuditSectionSumAggregateOutputType = {
    sortOrder: number | null
    maxScore: number | null
  }

  export type AuditSectionMinAggregateOutputType = {
    id: string | null
    templateId: string | null
    code: string | null
    title: string | null
    sortOrder: number | null
    maxScore: number | null
    createdAt: Date | null
  }

  export type AuditSectionMaxAggregateOutputType = {
    id: string | null
    templateId: string | null
    code: string | null
    title: string | null
    sortOrder: number | null
    maxScore: number | null
    createdAt: Date | null
  }

  export type AuditSectionCountAggregateOutputType = {
    id: number
    templateId: number
    code: number
    title: number
    sortOrder: number
    maxScore: number
    createdAt: number
    _all: number
  }


  export type AuditSectionAvgAggregateInputType = {
    sortOrder?: true
    maxScore?: true
  }

  export type AuditSectionSumAggregateInputType = {
    sortOrder?: true
    maxScore?: true
  }

  export type AuditSectionMinAggregateInputType = {
    id?: true
    templateId?: true
    code?: true
    title?: true
    sortOrder?: true
    maxScore?: true
    createdAt?: true
  }

  export type AuditSectionMaxAggregateInputType = {
    id?: true
    templateId?: true
    code?: true
    title?: true
    sortOrder?: true
    maxScore?: true
    createdAt?: true
  }

  export type AuditSectionCountAggregateInputType = {
    id?: true
    templateId?: true
    code?: true
    title?: true
    sortOrder?: true
    maxScore?: true
    createdAt?: true
    _all?: true
  }

  export type AuditSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditSection to aggregate.
     */
    where?: AuditSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditSections to fetch.
     */
    orderBy?: AuditSectionOrderByWithRelationInput | AuditSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditSections
    **/
    _count?: true | AuditSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditSectionMaxAggregateInputType
  }

  export type GetAuditSectionAggregateType<T extends AuditSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditSection[P]>
      : GetScalarType<T[P], AggregateAuditSection[P]>
  }




  export type AuditSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditSectionWhereInput
    orderBy?: AuditSectionOrderByWithAggregationInput | AuditSectionOrderByWithAggregationInput[]
    by: AuditSectionScalarFieldEnum[] | AuditSectionScalarFieldEnum
    having?: AuditSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditSectionCountAggregateInputType | true
    _avg?: AuditSectionAvgAggregateInputType
    _sum?: AuditSectionSumAggregateInputType
    _min?: AuditSectionMinAggregateInputType
    _max?: AuditSectionMaxAggregateInputType
  }

  export type AuditSectionGroupByOutputType = {
    id: string
    templateId: string
    code: string
    title: string
    sortOrder: number
    maxScore: number
    createdAt: Date
    _count: AuditSectionCountAggregateOutputType | null
    _avg: AuditSectionAvgAggregateOutputType | null
    _sum: AuditSectionSumAggregateOutputType | null
    _min: AuditSectionMinAggregateOutputType | null
    _max: AuditSectionMaxAggregateOutputType | null
  }

  type GetAuditSectionGroupByPayload<T extends AuditSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditSectionGroupByOutputType[P]>
            : GetScalarType<T[P], AuditSectionGroupByOutputType[P]>
        }
      >
    >


  export type AuditSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    code?: boolean
    title?: boolean
    sortOrder?: boolean
    maxScore?: boolean
    createdAt?: boolean
    template?: boolean | AuditTemplateDefaultArgs<ExtArgs>
    questions?: boolean | AuditSection$questionsArgs<ExtArgs>
    _count?: boolean | AuditSectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditSection"]>

  export type AuditSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    code?: boolean
    title?: boolean
    sortOrder?: boolean
    maxScore?: boolean
    createdAt?: boolean
    template?: boolean | AuditTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditSection"]>

  export type AuditSectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    code?: boolean
    title?: boolean
    sortOrder?: boolean
    maxScore?: boolean
    createdAt?: boolean
    template?: boolean | AuditTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditSection"]>

  export type AuditSectionSelectScalar = {
    id?: boolean
    templateId?: boolean
    code?: boolean
    title?: boolean
    sortOrder?: boolean
    maxScore?: boolean
    createdAt?: boolean
  }

  export type AuditSectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "templateId" | "code" | "title" | "sortOrder" | "maxScore" | "createdAt", ExtArgs["result"]["auditSection"]>
  export type AuditSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | AuditTemplateDefaultArgs<ExtArgs>
    questions?: boolean | AuditSection$questionsArgs<ExtArgs>
    _count?: boolean | AuditSectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AuditSectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | AuditTemplateDefaultArgs<ExtArgs>
  }
  export type AuditSectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | AuditTemplateDefaultArgs<ExtArgs>
  }

  export type $AuditSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditSection"
    objects: {
      template: Prisma.$AuditTemplatePayload<ExtArgs>
      questions: Prisma.$AuditQuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      templateId: string
      code: string
      title: string
      sortOrder: number
      maxScore: number
      createdAt: Date
    }, ExtArgs["result"]["auditSection"]>
    composites: {}
  }

  type AuditSectionGetPayload<S extends boolean | null | undefined | AuditSectionDefaultArgs> = $Result.GetResult<Prisma.$AuditSectionPayload, S>

  type AuditSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditSectionCountAggregateInputType | true
    }

  export interface AuditSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditSection'], meta: { name: 'AuditSection' } }
    /**
     * Find zero or one AuditSection that matches the filter.
     * @param {AuditSectionFindUniqueArgs} args - Arguments to find a AuditSection
     * @example
     * // Get one AuditSection
     * const auditSection = await prisma.auditSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditSectionFindUniqueArgs>(args: SelectSubset<T, AuditSectionFindUniqueArgs<ExtArgs>>): Prisma__AuditSectionClient<$Result.GetResult<Prisma.$AuditSectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditSection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditSectionFindUniqueOrThrowArgs} args - Arguments to find a AuditSection
     * @example
     * // Get one AuditSection
     * const auditSection = await prisma.auditSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditSectionClient<$Result.GetResult<Prisma.$AuditSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditSectionFindFirstArgs} args - Arguments to find a AuditSection
     * @example
     * // Get one AuditSection
     * const auditSection = await prisma.auditSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditSectionFindFirstArgs>(args?: SelectSubset<T, AuditSectionFindFirstArgs<ExtArgs>>): Prisma__AuditSectionClient<$Result.GetResult<Prisma.$AuditSectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditSectionFindFirstOrThrowArgs} args - Arguments to find a AuditSection
     * @example
     * // Get one AuditSection
     * const auditSection = await prisma.auditSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditSectionClient<$Result.GetResult<Prisma.$AuditSectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditSections
     * const auditSections = await prisma.auditSection.findMany()
     * 
     * // Get first 10 AuditSections
     * const auditSections = await prisma.auditSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditSectionWithIdOnly = await prisma.auditSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditSectionFindManyArgs>(args?: SelectSubset<T, AuditSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditSection.
     * @param {AuditSectionCreateArgs} args - Arguments to create a AuditSection.
     * @example
     * // Create one AuditSection
     * const AuditSection = await prisma.auditSection.create({
     *   data: {
     *     // ... data to create a AuditSection
     *   }
     * })
     * 
     */
    create<T extends AuditSectionCreateArgs>(args: SelectSubset<T, AuditSectionCreateArgs<ExtArgs>>): Prisma__AuditSectionClient<$Result.GetResult<Prisma.$AuditSectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditSections.
     * @param {AuditSectionCreateManyArgs} args - Arguments to create many AuditSections.
     * @example
     * // Create many AuditSections
     * const auditSection = await prisma.auditSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditSectionCreateManyArgs>(args?: SelectSubset<T, AuditSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditSections and returns the data saved in the database.
     * @param {AuditSectionCreateManyAndReturnArgs} args - Arguments to create many AuditSections.
     * @example
     * // Create many AuditSections
     * const auditSection = await prisma.auditSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditSections and only return the `id`
     * const auditSectionWithIdOnly = await prisma.auditSection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditSectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditSection.
     * @param {AuditSectionDeleteArgs} args - Arguments to delete one AuditSection.
     * @example
     * // Delete one AuditSection
     * const AuditSection = await prisma.auditSection.delete({
     *   where: {
     *     // ... filter to delete one AuditSection
     *   }
     * })
     * 
     */
    delete<T extends AuditSectionDeleteArgs>(args: SelectSubset<T, AuditSectionDeleteArgs<ExtArgs>>): Prisma__AuditSectionClient<$Result.GetResult<Prisma.$AuditSectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditSection.
     * @param {AuditSectionUpdateArgs} args - Arguments to update one AuditSection.
     * @example
     * // Update one AuditSection
     * const auditSection = await prisma.auditSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditSectionUpdateArgs>(args: SelectSubset<T, AuditSectionUpdateArgs<ExtArgs>>): Prisma__AuditSectionClient<$Result.GetResult<Prisma.$AuditSectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditSections.
     * @param {AuditSectionDeleteManyArgs} args - Arguments to filter AuditSections to delete.
     * @example
     * // Delete a few AuditSections
     * const { count } = await prisma.auditSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditSectionDeleteManyArgs>(args?: SelectSubset<T, AuditSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditSections
     * const auditSection = await prisma.auditSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditSectionUpdateManyArgs>(args: SelectSubset<T, AuditSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditSections and returns the data updated in the database.
     * @param {AuditSectionUpdateManyAndReturnArgs} args - Arguments to update many AuditSections.
     * @example
     * // Update many AuditSections
     * const auditSection = await prisma.auditSection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditSections and only return the `id`
     * const auditSectionWithIdOnly = await prisma.auditSection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditSectionUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditSectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditSectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditSection.
     * @param {AuditSectionUpsertArgs} args - Arguments to update or create a AuditSection.
     * @example
     * // Update or create a AuditSection
     * const auditSection = await prisma.auditSection.upsert({
     *   create: {
     *     // ... data to create a AuditSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditSection we want to update
     *   }
     * })
     */
    upsert<T extends AuditSectionUpsertArgs>(args: SelectSubset<T, AuditSectionUpsertArgs<ExtArgs>>): Prisma__AuditSectionClient<$Result.GetResult<Prisma.$AuditSectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditSectionCountArgs} args - Arguments to filter AuditSections to count.
     * @example
     * // Count the number of AuditSections
     * const count = await prisma.auditSection.count({
     *   where: {
     *     // ... the filter for the AuditSections we want to count
     *   }
     * })
    **/
    count<T extends AuditSectionCountArgs>(
      args?: Subset<T, AuditSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditSectionAggregateArgs>(args: Subset<T, AuditSectionAggregateArgs>): Prisma.PrismaPromise<GetAuditSectionAggregateType<T>>

    /**
     * Group by AuditSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditSectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditSectionGroupByArgs['orderBy'] }
        : { orderBy?: AuditSectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditSection model
   */
  readonly fields: AuditSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    template<T extends AuditTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuditTemplateDefaultArgs<ExtArgs>>): Prisma__AuditTemplateClient<$Result.GetResult<Prisma.$AuditTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questions<T extends AuditSection$questionsArgs<ExtArgs> = {}>(args?: Subset<T, AuditSection$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditSection model
   */
  interface AuditSectionFieldRefs {
    readonly id: FieldRef<"AuditSection", 'String'>
    readonly templateId: FieldRef<"AuditSection", 'String'>
    readonly code: FieldRef<"AuditSection", 'String'>
    readonly title: FieldRef<"AuditSection", 'String'>
    readonly sortOrder: FieldRef<"AuditSection", 'Int'>
    readonly maxScore: FieldRef<"AuditSection", 'Int'>
    readonly createdAt: FieldRef<"AuditSection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditSection findUnique
   */
  export type AuditSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSection
     */
    select?: AuditSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSection
     */
    omit?: AuditSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSectionInclude<ExtArgs> | null
    /**
     * Filter, which AuditSection to fetch.
     */
    where: AuditSectionWhereUniqueInput
  }

  /**
   * AuditSection findUniqueOrThrow
   */
  export type AuditSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSection
     */
    select?: AuditSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSection
     */
    omit?: AuditSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSectionInclude<ExtArgs> | null
    /**
     * Filter, which AuditSection to fetch.
     */
    where: AuditSectionWhereUniqueInput
  }

  /**
   * AuditSection findFirst
   */
  export type AuditSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSection
     */
    select?: AuditSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSection
     */
    omit?: AuditSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSectionInclude<ExtArgs> | null
    /**
     * Filter, which AuditSection to fetch.
     */
    where?: AuditSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditSections to fetch.
     */
    orderBy?: AuditSectionOrderByWithRelationInput | AuditSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditSections.
     */
    cursor?: AuditSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditSections.
     */
    distinct?: AuditSectionScalarFieldEnum | AuditSectionScalarFieldEnum[]
  }

  /**
   * AuditSection findFirstOrThrow
   */
  export type AuditSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSection
     */
    select?: AuditSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSection
     */
    omit?: AuditSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSectionInclude<ExtArgs> | null
    /**
     * Filter, which AuditSection to fetch.
     */
    where?: AuditSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditSections to fetch.
     */
    orderBy?: AuditSectionOrderByWithRelationInput | AuditSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditSections.
     */
    cursor?: AuditSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditSections.
     */
    distinct?: AuditSectionScalarFieldEnum | AuditSectionScalarFieldEnum[]
  }

  /**
   * AuditSection findMany
   */
  export type AuditSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSection
     */
    select?: AuditSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSection
     */
    omit?: AuditSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSectionInclude<ExtArgs> | null
    /**
     * Filter, which AuditSections to fetch.
     */
    where?: AuditSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditSections to fetch.
     */
    orderBy?: AuditSectionOrderByWithRelationInput | AuditSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditSections.
     */
    cursor?: AuditSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditSections.
     */
    skip?: number
    distinct?: AuditSectionScalarFieldEnum | AuditSectionScalarFieldEnum[]
  }

  /**
   * AuditSection create
   */
  export type AuditSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSection
     */
    select?: AuditSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSection
     */
    omit?: AuditSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditSection.
     */
    data: XOR<AuditSectionCreateInput, AuditSectionUncheckedCreateInput>
  }

  /**
   * AuditSection createMany
   */
  export type AuditSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditSections.
     */
    data: AuditSectionCreateManyInput | AuditSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditSection createManyAndReturn
   */
  export type AuditSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSection
     */
    select?: AuditSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSection
     */
    omit?: AuditSectionOmit<ExtArgs> | null
    /**
     * The data used to create many AuditSections.
     */
    data: AuditSectionCreateManyInput | AuditSectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditSection update
   */
  export type AuditSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSection
     */
    select?: AuditSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSection
     */
    omit?: AuditSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditSection.
     */
    data: XOR<AuditSectionUpdateInput, AuditSectionUncheckedUpdateInput>
    /**
     * Choose, which AuditSection to update.
     */
    where: AuditSectionWhereUniqueInput
  }

  /**
   * AuditSection updateMany
   */
  export type AuditSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditSections.
     */
    data: XOR<AuditSectionUpdateManyMutationInput, AuditSectionUncheckedUpdateManyInput>
    /**
     * Filter which AuditSections to update
     */
    where?: AuditSectionWhereInput
    /**
     * Limit how many AuditSections to update.
     */
    limit?: number
  }

  /**
   * AuditSection updateManyAndReturn
   */
  export type AuditSectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSection
     */
    select?: AuditSectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSection
     */
    omit?: AuditSectionOmit<ExtArgs> | null
    /**
     * The data used to update AuditSections.
     */
    data: XOR<AuditSectionUpdateManyMutationInput, AuditSectionUncheckedUpdateManyInput>
    /**
     * Filter which AuditSections to update
     */
    where?: AuditSectionWhereInput
    /**
     * Limit how many AuditSections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditSection upsert
   */
  export type AuditSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSection
     */
    select?: AuditSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSection
     */
    omit?: AuditSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditSection to update in case it exists.
     */
    where: AuditSectionWhereUniqueInput
    /**
     * In case the AuditSection found by the `where` argument doesn't exist, create a new AuditSection with this data.
     */
    create: XOR<AuditSectionCreateInput, AuditSectionUncheckedCreateInput>
    /**
     * In case the AuditSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditSectionUpdateInput, AuditSectionUncheckedUpdateInput>
  }

  /**
   * AuditSection delete
   */
  export type AuditSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSection
     */
    select?: AuditSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSection
     */
    omit?: AuditSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSectionInclude<ExtArgs> | null
    /**
     * Filter which AuditSection to delete.
     */
    where: AuditSectionWhereUniqueInput
  }

  /**
   * AuditSection deleteMany
   */
  export type AuditSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditSections to delete
     */
    where?: AuditSectionWhereInput
    /**
     * Limit how many AuditSections to delete.
     */
    limit?: number
  }

  /**
   * AuditSection.questions
   */
  export type AuditSection$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditQuestion
     */
    select?: AuditQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditQuestion
     */
    omit?: AuditQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditQuestionInclude<ExtArgs> | null
    where?: AuditQuestionWhereInput
    orderBy?: AuditQuestionOrderByWithRelationInput | AuditQuestionOrderByWithRelationInput[]
    cursor?: AuditQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditQuestionScalarFieldEnum | AuditQuestionScalarFieldEnum[]
  }

  /**
   * AuditSection without action
   */
  export type AuditSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSection
     */
    select?: AuditSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSection
     */
    omit?: AuditSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSectionInclude<ExtArgs> | null
  }


  /**
   * Model AuditQuestion
   */

  export type AggregateAuditQuestion = {
    _count: AuditQuestionCountAggregateOutputType | null
    _avg: AuditQuestionAvgAggregateOutputType | null
    _sum: AuditQuestionSumAggregateOutputType | null
    _min: AuditQuestionMinAggregateOutputType | null
    _max: AuditQuestionMaxAggregateOutputType | null
  }

  export type AuditQuestionAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type AuditQuestionSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type AuditQuestionMinAggregateOutputType = {
    id: string | null
    sectionId: string | null
    code: string | null
    text: string | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type AuditQuestionMaxAggregateOutputType = {
    id: string | null
    sectionId: string | null
    code: string | null
    text: string | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type AuditQuestionCountAggregateOutputType = {
    id: number
    sectionId: number
    code: number
    text: number
    sortOrder: number
    createdAt: number
    _all: number
  }


  export type AuditQuestionAvgAggregateInputType = {
    sortOrder?: true
  }

  export type AuditQuestionSumAggregateInputType = {
    sortOrder?: true
  }

  export type AuditQuestionMinAggregateInputType = {
    id?: true
    sectionId?: true
    code?: true
    text?: true
    sortOrder?: true
    createdAt?: true
  }

  export type AuditQuestionMaxAggregateInputType = {
    id?: true
    sectionId?: true
    code?: true
    text?: true
    sortOrder?: true
    createdAt?: true
  }

  export type AuditQuestionCountAggregateInputType = {
    id?: true
    sectionId?: true
    code?: true
    text?: true
    sortOrder?: true
    createdAt?: true
    _all?: true
  }

  export type AuditQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditQuestion to aggregate.
     */
    where?: AuditQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditQuestions to fetch.
     */
    orderBy?: AuditQuestionOrderByWithRelationInput | AuditQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditQuestions
    **/
    _count?: true | AuditQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditQuestionMaxAggregateInputType
  }

  export type GetAuditQuestionAggregateType<T extends AuditQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditQuestion[P]>
      : GetScalarType<T[P], AggregateAuditQuestion[P]>
  }




  export type AuditQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditQuestionWhereInput
    orderBy?: AuditQuestionOrderByWithAggregationInput | AuditQuestionOrderByWithAggregationInput[]
    by: AuditQuestionScalarFieldEnum[] | AuditQuestionScalarFieldEnum
    having?: AuditQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditQuestionCountAggregateInputType | true
    _avg?: AuditQuestionAvgAggregateInputType
    _sum?: AuditQuestionSumAggregateInputType
    _min?: AuditQuestionMinAggregateInputType
    _max?: AuditQuestionMaxAggregateInputType
  }

  export type AuditQuestionGroupByOutputType = {
    id: string
    sectionId: string
    code: string
    text: string
    sortOrder: number
    createdAt: Date
    _count: AuditQuestionCountAggregateOutputType | null
    _avg: AuditQuestionAvgAggregateOutputType | null
    _sum: AuditQuestionSumAggregateOutputType | null
    _min: AuditQuestionMinAggregateOutputType | null
    _max: AuditQuestionMaxAggregateOutputType | null
  }

  type GetAuditQuestionGroupByPayload<T extends AuditQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], AuditQuestionGroupByOutputType[P]>
        }
      >
    >


  export type AuditQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionId?: boolean
    code?: boolean
    text?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    section?: boolean | AuditSectionDefaultArgs<ExtArgs>
    options?: boolean | AuditQuestion$optionsArgs<ExtArgs>
    answers?: boolean | AuditQuestion$answersArgs<ExtArgs>
    _count?: boolean | AuditQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditQuestion"]>

  export type AuditQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionId?: boolean
    code?: boolean
    text?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    section?: boolean | AuditSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditQuestion"]>

  export type AuditQuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionId?: boolean
    code?: boolean
    text?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    section?: boolean | AuditSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditQuestion"]>

  export type AuditQuestionSelectScalar = {
    id?: boolean
    sectionId?: boolean
    code?: boolean
    text?: boolean
    sortOrder?: boolean
    createdAt?: boolean
  }

  export type AuditQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sectionId" | "code" | "text" | "sortOrder" | "createdAt", ExtArgs["result"]["auditQuestion"]>
  export type AuditQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | AuditSectionDefaultArgs<ExtArgs>
    options?: boolean | AuditQuestion$optionsArgs<ExtArgs>
    answers?: boolean | AuditQuestion$answersArgs<ExtArgs>
    _count?: boolean | AuditQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AuditQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | AuditSectionDefaultArgs<ExtArgs>
  }
  export type AuditQuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | AuditSectionDefaultArgs<ExtArgs>
  }

  export type $AuditQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditQuestion"
    objects: {
      section: Prisma.$AuditSectionPayload<ExtArgs>
      options: Prisma.$AuditOptionPayload<ExtArgs>[]
      answers: Prisma.$AuditAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sectionId: string
      code: string
      text: string
      sortOrder: number
      createdAt: Date
    }, ExtArgs["result"]["auditQuestion"]>
    composites: {}
  }

  type AuditQuestionGetPayload<S extends boolean | null | undefined | AuditQuestionDefaultArgs> = $Result.GetResult<Prisma.$AuditQuestionPayload, S>

  type AuditQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditQuestionCountAggregateInputType | true
    }

  export interface AuditQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditQuestion'], meta: { name: 'AuditQuestion' } }
    /**
     * Find zero or one AuditQuestion that matches the filter.
     * @param {AuditQuestionFindUniqueArgs} args - Arguments to find a AuditQuestion
     * @example
     * // Get one AuditQuestion
     * const auditQuestion = await prisma.auditQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditQuestionFindUniqueArgs>(args: SelectSubset<T, AuditQuestionFindUniqueArgs<ExtArgs>>): Prisma__AuditQuestionClient<$Result.GetResult<Prisma.$AuditQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditQuestionFindUniqueOrThrowArgs} args - Arguments to find a AuditQuestion
     * @example
     * // Get one AuditQuestion
     * const auditQuestion = await prisma.auditQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditQuestionClient<$Result.GetResult<Prisma.$AuditQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditQuestionFindFirstArgs} args - Arguments to find a AuditQuestion
     * @example
     * // Get one AuditQuestion
     * const auditQuestion = await prisma.auditQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditQuestionFindFirstArgs>(args?: SelectSubset<T, AuditQuestionFindFirstArgs<ExtArgs>>): Prisma__AuditQuestionClient<$Result.GetResult<Prisma.$AuditQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditQuestionFindFirstOrThrowArgs} args - Arguments to find a AuditQuestion
     * @example
     * // Get one AuditQuestion
     * const auditQuestion = await prisma.auditQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditQuestionClient<$Result.GetResult<Prisma.$AuditQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditQuestions
     * const auditQuestions = await prisma.auditQuestion.findMany()
     * 
     * // Get first 10 AuditQuestions
     * const auditQuestions = await prisma.auditQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditQuestionWithIdOnly = await prisma.auditQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditQuestionFindManyArgs>(args?: SelectSubset<T, AuditQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditQuestion.
     * @param {AuditQuestionCreateArgs} args - Arguments to create a AuditQuestion.
     * @example
     * // Create one AuditQuestion
     * const AuditQuestion = await prisma.auditQuestion.create({
     *   data: {
     *     // ... data to create a AuditQuestion
     *   }
     * })
     * 
     */
    create<T extends AuditQuestionCreateArgs>(args: SelectSubset<T, AuditQuestionCreateArgs<ExtArgs>>): Prisma__AuditQuestionClient<$Result.GetResult<Prisma.$AuditQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditQuestions.
     * @param {AuditQuestionCreateManyArgs} args - Arguments to create many AuditQuestions.
     * @example
     * // Create many AuditQuestions
     * const auditQuestion = await prisma.auditQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditQuestionCreateManyArgs>(args?: SelectSubset<T, AuditQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditQuestions and returns the data saved in the database.
     * @param {AuditQuestionCreateManyAndReturnArgs} args - Arguments to create many AuditQuestions.
     * @example
     * // Create many AuditQuestions
     * const auditQuestion = await prisma.auditQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditQuestions and only return the `id`
     * const auditQuestionWithIdOnly = await prisma.auditQuestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditQuestion.
     * @param {AuditQuestionDeleteArgs} args - Arguments to delete one AuditQuestion.
     * @example
     * // Delete one AuditQuestion
     * const AuditQuestion = await prisma.auditQuestion.delete({
     *   where: {
     *     // ... filter to delete one AuditQuestion
     *   }
     * })
     * 
     */
    delete<T extends AuditQuestionDeleteArgs>(args: SelectSubset<T, AuditQuestionDeleteArgs<ExtArgs>>): Prisma__AuditQuestionClient<$Result.GetResult<Prisma.$AuditQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditQuestion.
     * @param {AuditQuestionUpdateArgs} args - Arguments to update one AuditQuestion.
     * @example
     * // Update one AuditQuestion
     * const auditQuestion = await prisma.auditQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditQuestionUpdateArgs>(args: SelectSubset<T, AuditQuestionUpdateArgs<ExtArgs>>): Prisma__AuditQuestionClient<$Result.GetResult<Prisma.$AuditQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditQuestions.
     * @param {AuditQuestionDeleteManyArgs} args - Arguments to filter AuditQuestions to delete.
     * @example
     * // Delete a few AuditQuestions
     * const { count } = await prisma.auditQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditQuestionDeleteManyArgs>(args?: SelectSubset<T, AuditQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditQuestions
     * const auditQuestion = await prisma.auditQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditQuestionUpdateManyArgs>(args: SelectSubset<T, AuditQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditQuestions and returns the data updated in the database.
     * @param {AuditQuestionUpdateManyAndReturnArgs} args - Arguments to update many AuditQuestions.
     * @example
     * // Update many AuditQuestions
     * const auditQuestion = await prisma.auditQuestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditQuestions and only return the `id`
     * const auditQuestionWithIdOnly = await prisma.auditQuestion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditQuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditQuestion.
     * @param {AuditQuestionUpsertArgs} args - Arguments to update or create a AuditQuestion.
     * @example
     * // Update or create a AuditQuestion
     * const auditQuestion = await prisma.auditQuestion.upsert({
     *   create: {
     *     // ... data to create a AuditQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditQuestion we want to update
     *   }
     * })
     */
    upsert<T extends AuditQuestionUpsertArgs>(args: SelectSubset<T, AuditQuestionUpsertArgs<ExtArgs>>): Prisma__AuditQuestionClient<$Result.GetResult<Prisma.$AuditQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditQuestionCountArgs} args - Arguments to filter AuditQuestions to count.
     * @example
     * // Count the number of AuditQuestions
     * const count = await prisma.auditQuestion.count({
     *   where: {
     *     // ... the filter for the AuditQuestions we want to count
     *   }
     * })
    **/
    count<T extends AuditQuestionCountArgs>(
      args?: Subset<T, AuditQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditQuestionAggregateArgs>(args: Subset<T, AuditQuestionAggregateArgs>): Prisma.PrismaPromise<GetAuditQuestionAggregateType<T>>

    /**
     * Group by AuditQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditQuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditQuestionGroupByArgs['orderBy'] }
        : { orderBy?: AuditQuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditQuestion model
   */
  readonly fields: AuditQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    section<T extends AuditSectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuditSectionDefaultArgs<ExtArgs>>): Prisma__AuditSectionClient<$Result.GetResult<Prisma.$AuditSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    options<T extends AuditQuestion$optionsArgs<ExtArgs> = {}>(args?: Subset<T, AuditQuestion$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    answers<T extends AuditQuestion$answersArgs<ExtArgs> = {}>(args?: Subset<T, AuditQuestion$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditQuestion model
   */
  interface AuditQuestionFieldRefs {
    readonly id: FieldRef<"AuditQuestion", 'String'>
    readonly sectionId: FieldRef<"AuditQuestion", 'String'>
    readonly code: FieldRef<"AuditQuestion", 'String'>
    readonly text: FieldRef<"AuditQuestion", 'String'>
    readonly sortOrder: FieldRef<"AuditQuestion", 'Int'>
    readonly createdAt: FieldRef<"AuditQuestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditQuestion findUnique
   */
  export type AuditQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditQuestion
     */
    select?: AuditQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditQuestion
     */
    omit?: AuditQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditQuestionInclude<ExtArgs> | null
    /**
     * Filter, which AuditQuestion to fetch.
     */
    where: AuditQuestionWhereUniqueInput
  }

  /**
   * AuditQuestion findUniqueOrThrow
   */
  export type AuditQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditQuestion
     */
    select?: AuditQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditQuestion
     */
    omit?: AuditQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditQuestionInclude<ExtArgs> | null
    /**
     * Filter, which AuditQuestion to fetch.
     */
    where: AuditQuestionWhereUniqueInput
  }

  /**
   * AuditQuestion findFirst
   */
  export type AuditQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditQuestion
     */
    select?: AuditQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditQuestion
     */
    omit?: AuditQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditQuestionInclude<ExtArgs> | null
    /**
     * Filter, which AuditQuestion to fetch.
     */
    where?: AuditQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditQuestions to fetch.
     */
    orderBy?: AuditQuestionOrderByWithRelationInput | AuditQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditQuestions.
     */
    cursor?: AuditQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditQuestions.
     */
    distinct?: AuditQuestionScalarFieldEnum | AuditQuestionScalarFieldEnum[]
  }

  /**
   * AuditQuestion findFirstOrThrow
   */
  export type AuditQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditQuestion
     */
    select?: AuditQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditQuestion
     */
    omit?: AuditQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditQuestionInclude<ExtArgs> | null
    /**
     * Filter, which AuditQuestion to fetch.
     */
    where?: AuditQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditQuestions to fetch.
     */
    orderBy?: AuditQuestionOrderByWithRelationInput | AuditQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditQuestions.
     */
    cursor?: AuditQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditQuestions.
     */
    distinct?: AuditQuestionScalarFieldEnum | AuditQuestionScalarFieldEnum[]
  }

  /**
   * AuditQuestion findMany
   */
  export type AuditQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditQuestion
     */
    select?: AuditQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditQuestion
     */
    omit?: AuditQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditQuestionInclude<ExtArgs> | null
    /**
     * Filter, which AuditQuestions to fetch.
     */
    where?: AuditQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditQuestions to fetch.
     */
    orderBy?: AuditQuestionOrderByWithRelationInput | AuditQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditQuestions.
     */
    cursor?: AuditQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditQuestions.
     */
    skip?: number
    distinct?: AuditQuestionScalarFieldEnum | AuditQuestionScalarFieldEnum[]
  }

  /**
   * AuditQuestion create
   */
  export type AuditQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditQuestion
     */
    select?: AuditQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditQuestion
     */
    omit?: AuditQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditQuestion.
     */
    data: XOR<AuditQuestionCreateInput, AuditQuestionUncheckedCreateInput>
  }

  /**
   * AuditQuestion createMany
   */
  export type AuditQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditQuestions.
     */
    data: AuditQuestionCreateManyInput | AuditQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditQuestion createManyAndReturn
   */
  export type AuditQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditQuestion
     */
    select?: AuditQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditQuestion
     */
    omit?: AuditQuestionOmit<ExtArgs> | null
    /**
     * The data used to create many AuditQuestions.
     */
    data: AuditQuestionCreateManyInput | AuditQuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditQuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditQuestion update
   */
  export type AuditQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditQuestion
     */
    select?: AuditQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditQuestion
     */
    omit?: AuditQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditQuestion.
     */
    data: XOR<AuditQuestionUpdateInput, AuditQuestionUncheckedUpdateInput>
    /**
     * Choose, which AuditQuestion to update.
     */
    where: AuditQuestionWhereUniqueInput
  }

  /**
   * AuditQuestion updateMany
   */
  export type AuditQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditQuestions.
     */
    data: XOR<AuditQuestionUpdateManyMutationInput, AuditQuestionUncheckedUpdateManyInput>
    /**
     * Filter which AuditQuestions to update
     */
    where?: AuditQuestionWhereInput
    /**
     * Limit how many AuditQuestions to update.
     */
    limit?: number
  }

  /**
   * AuditQuestion updateManyAndReturn
   */
  export type AuditQuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditQuestion
     */
    select?: AuditQuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditQuestion
     */
    omit?: AuditQuestionOmit<ExtArgs> | null
    /**
     * The data used to update AuditQuestions.
     */
    data: XOR<AuditQuestionUpdateManyMutationInput, AuditQuestionUncheckedUpdateManyInput>
    /**
     * Filter which AuditQuestions to update
     */
    where?: AuditQuestionWhereInput
    /**
     * Limit how many AuditQuestions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditQuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditQuestion upsert
   */
  export type AuditQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditQuestion
     */
    select?: AuditQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditQuestion
     */
    omit?: AuditQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditQuestion to update in case it exists.
     */
    where: AuditQuestionWhereUniqueInput
    /**
     * In case the AuditQuestion found by the `where` argument doesn't exist, create a new AuditQuestion with this data.
     */
    create: XOR<AuditQuestionCreateInput, AuditQuestionUncheckedCreateInput>
    /**
     * In case the AuditQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditQuestionUpdateInput, AuditQuestionUncheckedUpdateInput>
  }

  /**
   * AuditQuestion delete
   */
  export type AuditQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditQuestion
     */
    select?: AuditQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditQuestion
     */
    omit?: AuditQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditQuestionInclude<ExtArgs> | null
    /**
     * Filter which AuditQuestion to delete.
     */
    where: AuditQuestionWhereUniqueInput
  }

  /**
   * AuditQuestion deleteMany
   */
  export type AuditQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditQuestions to delete
     */
    where?: AuditQuestionWhereInput
    /**
     * Limit how many AuditQuestions to delete.
     */
    limit?: number
  }

  /**
   * AuditQuestion.options
   */
  export type AuditQuestion$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditOption
     */
    select?: AuditOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditOption
     */
    omit?: AuditOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditOptionInclude<ExtArgs> | null
    where?: AuditOptionWhereInput
    orderBy?: AuditOptionOrderByWithRelationInput | AuditOptionOrderByWithRelationInput[]
    cursor?: AuditOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditOptionScalarFieldEnum | AuditOptionScalarFieldEnum[]
  }

  /**
   * AuditQuestion.answers
   */
  export type AuditQuestion$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditAnswer
     */
    select?: AuditAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditAnswer
     */
    omit?: AuditAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditAnswerInclude<ExtArgs> | null
    where?: AuditAnswerWhereInput
    orderBy?: AuditAnswerOrderByWithRelationInput | AuditAnswerOrderByWithRelationInput[]
    cursor?: AuditAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditAnswerScalarFieldEnum | AuditAnswerScalarFieldEnum[]
  }

  /**
   * AuditQuestion without action
   */
  export type AuditQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditQuestion
     */
    select?: AuditQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditQuestion
     */
    omit?: AuditQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditQuestionInclude<ExtArgs> | null
  }


  /**
   * Model AuditOption
   */

  export type AggregateAuditOption = {
    _count: AuditOptionCountAggregateOutputType | null
    _avg: AuditOptionAvgAggregateOutputType | null
    _sum: AuditOptionSumAggregateOutputType | null
    _min: AuditOptionMinAggregateOutputType | null
    _max: AuditOptionMaxAggregateOutputType | null
  }

  export type AuditOptionAvgAggregateOutputType = {
    points: number | null
    sortOrder: number | null
  }

  export type AuditOptionSumAggregateOutputType = {
    points: number | null
    sortOrder: number | null
  }

  export type AuditOptionMinAggregateOutputType = {
    id: string | null
    questionId: string | null
    label: string | null
    points: number | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type AuditOptionMaxAggregateOutputType = {
    id: string | null
    questionId: string | null
    label: string | null
    points: number | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type AuditOptionCountAggregateOutputType = {
    id: number
    questionId: number
    label: number
    points: number
    sortOrder: number
    createdAt: number
    _all: number
  }


  export type AuditOptionAvgAggregateInputType = {
    points?: true
    sortOrder?: true
  }

  export type AuditOptionSumAggregateInputType = {
    points?: true
    sortOrder?: true
  }

  export type AuditOptionMinAggregateInputType = {
    id?: true
    questionId?: true
    label?: true
    points?: true
    sortOrder?: true
    createdAt?: true
  }

  export type AuditOptionMaxAggregateInputType = {
    id?: true
    questionId?: true
    label?: true
    points?: true
    sortOrder?: true
    createdAt?: true
  }

  export type AuditOptionCountAggregateInputType = {
    id?: true
    questionId?: true
    label?: true
    points?: true
    sortOrder?: true
    createdAt?: true
    _all?: true
  }

  export type AuditOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditOption to aggregate.
     */
    where?: AuditOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditOptions to fetch.
     */
    orderBy?: AuditOptionOrderByWithRelationInput | AuditOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditOptions
    **/
    _count?: true | AuditOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditOptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditOptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditOptionMaxAggregateInputType
  }

  export type GetAuditOptionAggregateType<T extends AuditOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditOption[P]>
      : GetScalarType<T[P], AggregateAuditOption[P]>
  }




  export type AuditOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditOptionWhereInput
    orderBy?: AuditOptionOrderByWithAggregationInput | AuditOptionOrderByWithAggregationInput[]
    by: AuditOptionScalarFieldEnum[] | AuditOptionScalarFieldEnum
    having?: AuditOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditOptionCountAggregateInputType | true
    _avg?: AuditOptionAvgAggregateInputType
    _sum?: AuditOptionSumAggregateInputType
    _min?: AuditOptionMinAggregateInputType
    _max?: AuditOptionMaxAggregateInputType
  }

  export type AuditOptionGroupByOutputType = {
    id: string
    questionId: string
    label: string
    points: number
    sortOrder: number
    createdAt: Date
    _count: AuditOptionCountAggregateOutputType | null
    _avg: AuditOptionAvgAggregateOutputType | null
    _sum: AuditOptionSumAggregateOutputType | null
    _min: AuditOptionMinAggregateOutputType | null
    _max: AuditOptionMaxAggregateOutputType | null
  }

  type GetAuditOptionGroupByPayload<T extends AuditOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditOptionGroupByOutputType[P]>
            : GetScalarType<T[P], AuditOptionGroupByOutputType[P]>
        }
      >
    >


  export type AuditOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    label?: boolean
    points?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    question?: boolean | AuditQuestionDefaultArgs<ExtArgs>
    answers?: boolean | AuditOption$answersArgs<ExtArgs>
    _count?: boolean | AuditOptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditOption"]>

  export type AuditOptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    label?: boolean
    points?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    question?: boolean | AuditQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditOption"]>

  export type AuditOptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    label?: boolean
    points?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    question?: boolean | AuditQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditOption"]>

  export type AuditOptionSelectScalar = {
    id?: boolean
    questionId?: boolean
    label?: boolean
    points?: boolean
    sortOrder?: boolean
    createdAt?: boolean
  }

  export type AuditOptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "questionId" | "label" | "points" | "sortOrder" | "createdAt", ExtArgs["result"]["auditOption"]>
  export type AuditOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | AuditQuestionDefaultArgs<ExtArgs>
    answers?: boolean | AuditOption$answersArgs<ExtArgs>
    _count?: boolean | AuditOptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AuditOptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | AuditQuestionDefaultArgs<ExtArgs>
  }
  export type AuditOptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | AuditQuestionDefaultArgs<ExtArgs>
  }

  export type $AuditOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditOption"
    objects: {
      question: Prisma.$AuditQuestionPayload<ExtArgs>
      answers: Prisma.$AuditAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      questionId: string
      label: string
      points: number
      sortOrder: number
      createdAt: Date
    }, ExtArgs["result"]["auditOption"]>
    composites: {}
  }

  type AuditOptionGetPayload<S extends boolean | null | undefined | AuditOptionDefaultArgs> = $Result.GetResult<Prisma.$AuditOptionPayload, S>

  type AuditOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditOptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditOptionCountAggregateInputType | true
    }

  export interface AuditOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditOption'], meta: { name: 'AuditOption' } }
    /**
     * Find zero or one AuditOption that matches the filter.
     * @param {AuditOptionFindUniqueArgs} args - Arguments to find a AuditOption
     * @example
     * // Get one AuditOption
     * const auditOption = await prisma.auditOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditOptionFindUniqueArgs>(args: SelectSubset<T, AuditOptionFindUniqueArgs<ExtArgs>>): Prisma__AuditOptionClient<$Result.GetResult<Prisma.$AuditOptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditOption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditOptionFindUniqueOrThrowArgs} args - Arguments to find a AuditOption
     * @example
     * // Get one AuditOption
     * const auditOption = await prisma.auditOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditOptionFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditOptionClient<$Result.GetResult<Prisma.$AuditOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditOptionFindFirstArgs} args - Arguments to find a AuditOption
     * @example
     * // Get one AuditOption
     * const auditOption = await prisma.auditOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditOptionFindFirstArgs>(args?: SelectSubset<T, AuditOptionFindFirstArgs<ExtArgs>>): Prisma__AuditOptionClient<$Result.GetResult<Prisma.$AuditOptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditOptionFindFirstOrThrowArgs} args - Arguments to find a AuditOption
     * @example
     * // Get one AuditOption
     * const auditOption = await prisma.auditOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditOptionFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditOptionClient<$Result.GetResult<Prisma.$AuditOptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditOptions
     * const auditOptions = await prisma.auditOption.findMany()
     * 
     * // Get first 10 AuditOptions
     * const auditOptions = await prisma.auditOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditOptionWithIdOnly = await prisma.auditOption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditOptionFindManyArgs>(args?: SelectSubset<T, AuditOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditOption.
     * @param {AuditOptionCreateArgs} args - Arguments to create a AuditOption.
     * @example
     * // Create one AuditOption
     * const AuditOption = await prisma.auditOption.create({
     *   data: {
     *     // ... data to create a AuditOption
     *   }
     * })
     * 
     */
    create<T extends AuditOptionCreateArgs>(args: SelectSubset<T, AuditOptionCreateArgs<ExtArgs>>): Prisma__AuditOptionClient<$Result.GetResult<Prisma.$AuditOptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditOptions.
     * @param {AuditOptionCreateManyArgs} args - Arguments to create many AuditOptions.
     * @example
     * // Create many AuditOptions
     * const auditOption = await prisma.auditOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditOptionCreateManyArgs>(args?: SelectSubset<T, AuditOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditOptions and returns the data saved in the database.
     * @param {AuditOptionCreateManyAndReturnArgs} args - Arguments to create many AuditOptions.
     * @example
     * // Create many AuditOptions
     * const auditOption = await prisma.auditOption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditOptions and only return the `id`
     * const auditOptionWithIdOnly = await prisma.auditOption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditOptionCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditOptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditOptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditOption.
     * @param {AuditOptionDeleteArgs} args - Arguments to delete one AuditOption.
     * @example
     * // Delete one AuditOption
     * const AuditOption = await prisma.auditOption.delete({
     *   where: {
     *     // ... filter to delete one AuditOption
     *   }
     * })
     * 
     */
    delete<T extends AuditOptionDeleteArgs>(args: SelectSubset<T, AuditOptionDeleteArgs<ExtArgs>>): Prisma__AuditOptionClient<$Result.GetResult<Prisma.$AuditOptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditOption.
     * @param {AuditOptionUpdateArgs} args - Arguments to update one AuditOption.
     * @example
     * // Update one AuditOption
     * const auditOption = await prisma.auditOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditOptionUpdateArgs>(args: SelectSubset<T, AuditOptionUpdateArgs<ExtArgs>>): Prisma__AuditOptionClient<$Result.GetResult<Prisma.$AuditOptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditOptions.
     * @param {AuditOptionDeleteManyArgs} args - Arguments to filter AuditOptions to delete.
     * @example
     * // Delete a few AuditOptions
     * const { count } = await prisma.auditOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditOptionDeleteManyArgs>(args?: SelectSubset<T, AuditOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditOptions
     * const auditOption = await prisma.auditOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditOptionUpdateManyArgs>(args: SelectSubset<T, AuditOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditOptions and returns the data updated in the database.
     * @param {AuditOptionUpdateManyAndReturnArgs} args - Arguments to update many AuditOptions.
     * @example
     * // Update many AuditOptions
     * const auditOption = await prisma.auditOption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditOptions and only return the `id`
     * const auditOptionWithIdOnly = await prisma.auditOption.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditOptionUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditOptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditOptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditOption.
     * @param {AuditOptionUpsertArgs} args - Arguments to update or create a AuditOption.
     * @example
     * // Update or create a AuditOption
     * const auditOption = await prisma.auditOption.upsert({
     *   create: {
     *     // ... data to create a AuditOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditOption we want to update
     *   }
     * })
     */
    upsert<T extends AuditOptionUpsertArgs>(args: SelectSubset<T, AuditOptionUpsertArgs<ExtArgs>>): Prisma__AuditOptionClient<$Result.GetResult<Prisma.$AuditOptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditOptionCountArgs} args - Arguments to filter AuditOptions to count.
     * @example
     * // Count the number of AuditOptions
     * const count = await prisma.auditOption.count({
     *   where: {
     *     // ... the filter for the AuditOptions we want to count
     *   }
     * })
    **/
    count<T extends AuditOptionCountArgs>(
      args?: Subset<T, AuditOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditOptionAggregateArgs>(args: Subset<T, AuditOptionAggregateArgs>): Prisma.PrismaPromise<GetAuditOptionAggregateType<T>>

    /**
     * Group by AuditOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditOptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditOptionGroupByArgs['orderBy'] }
        : { orderBy?: AuditOptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditOption model
   */
  readonly fields: AuditOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends AuditQuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuditQuestionDefaultArgs<ExtArgs>>): Prisma__AuditQuestionClient<$Result.GetResult<Prisma.$AuditQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends AuditOption$answersArgs<ExtArgs> = {}>(args?: Subset<T, AuditOption$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditOption model
   */
  interface AuditOptionFieldRefs {
    readonly id: FieldRef<"AuditOption", 'String'>
    readonly questionId: FieldRef<"AuditOption", 'String'>
    readonly label: FieldRef<"AuditOption", 'String'>
    readonly points: FieldRef<"AuditOption", 'Int'>
    readonly sortOrder: FieldRef<"AuditOption", 'Int'>
    readonly createdAt: FieldRef<"AuditOption", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditOption findUnique
   */
  export type AuditOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditOption
     */
    select?: AuditOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditOption
     */
    omit?: AuditOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditOptionInclude<ExtArgs> | null
    /**
     * Filter, which AuditOption to fetch.
     */
    where: AuditOptionWhereUniqueInput
  }

  /**
   * AuditOption findUniqueOrThrow
   */
  export type AuditOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditOption
     */
    select?: AuditOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditOption
     */
    omit?: AuditOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditOptionInclude<ExtArgs> | null
    /**
     * Filter, which AuditOption to fetch.
     */
    where: AuditOptionWhereUniqueInput
  }

  /**
   * AuditOption findFirst
   */
  export type AuditOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditOption
     */
    select?: AuditOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditOption
     */
    omit?: AuditOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditOptionInclude<ExtArgs> | null
    /**
     * Filter, which AuditOption to fetch.
     */
    where?: AuditOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditOptions to fetch.
     */
    orderBy?: AuditOptionOrderByWithRelationInput | AuditOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditOptions.
     */
    cursor?: AuditOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditOptions.
     */
    distinct?: AuditOptionScalarFieldEnum | AuditOptionScalarFieldEnum[]
  }

  /**
   * AuditOption findFirstOrThrow
   */
  export type AuditOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditOption
     */
    select?: AuditOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditOption
     */
    omit?: AuditOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditOptionInclude<ExtArgs> | null
    /**
     * Filter, which AuditOption to fetch.
     */
    where?: AuditOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditOptions to fetch.
     */
    orderBy?: AuditOptionOrderByWithRelationInput | AuditOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditOptions.
     */
    cursor?: AuditOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditOptions.
     */
    distinct?: AuditOptionScalarFieldEnum | AuditOptionScalarFieldEnum[]
  }

  /**
   * AuditOption findMany
   */
  export type AuditOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditOption
     */
    select?: AuditOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditOption
     */
    omit?: AuditOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditOptionInclude<ExtArgs> | null
    /**
     * Filter, which AuditOptions to fetch.
     */
    where?: AuditOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditOptions to fetch.
     */
    orderBy?: AuditOptionOrderByWithRelationInput | AuditOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditOptions.
     */
    cursor?: AuditOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditOptions.
     */
    skip?: number
    distinct?: AuditOptionScalarFieldEnum | AuditOptionScalarFieldEnum[]
  }

  /**
   * AuditOption create
   */
  export type AuditOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditOption
     */
    select?: AuditOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditOption
     */
    omit?: AuditOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditOption.
     */
    data: XOR<AuditOptionCreateInput, AuditOptionUncheckedCreateInput>
  }

  /**
   * AuditOption createMany
   */
  export type AuditOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditOptions.
     */
    data: AuditOptionCreateManyInput | AuditOptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditOption createManyAndReturn
   */
  export type AuditOptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditOption
     */
    select?: AuditOptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditOption
     */
    omit?: AuditOptionOmit<ExtArgs> | null
    /**
     * The data used to create many AuditOptions.
     */
    data: AuditOptionCreateManyInput | AuditOptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditOptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditOption update
   */
  export type AuditOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditOption
     */
    select?: AuditOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditOption
     */
    omit?: AuditOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditOption.
     */
    data: XOR<AuditOptionUpdateInput, AuditOptionUncheckedUpdateInput>
    /**
     * Choose, which AuditOption to update.
     */
    where: AuditOptionWhereUniqueInput
  }

  /**
   * AuditOption updateMany
   */
  export type AuditOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditOptions.
     */
    data: XOR<AuditOptionUpdateManyMutationInput, AuditOptionUncheckedUpdateManyInput>
    /**
     * Filter which AuditOptions to update
     */
    where?: AuditOptionWhereInput
    /**
     * Limit how many AuditOptions to update.
     */
    limit?: number
  }

  /**
   * AuditOption updateManyAndReturn
   */
  export type AuditOptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditOption
     */
    select?: AuditOptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditOption
     */
    omit?: AuditOptionOmit<ExtArgs> | null
    /**
     * The data used to update AuditOptions.
     */
    data: XOR<AuditOptionUpdateManyMutationInput, AuditOptionUncheckedUpdateManyInput>
    /**
     * Filter which AuditOptions to update
     */
    where?: AuditOptionWhereInput
    /**
     * Limit how many AuditOptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditOptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditOption upsert
   */
  export type AuditOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditOption
     */
    select?: AuditOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditOption
     */
    omit?: AuditOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditOption to update in case it exists.
     */
    where: AuditOptionWhereUniqueInput
    /**
     * In case the AuditOption found by the `where` argument doesn't exist, create a new AuditOption with this data.
     */
    create: XOR<AuditOptionCreateInput, AuditOptionUncheckedCreateInput>
    /**
     * In case the AuditOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditOptionUpdateInput, AuditOptionUncheckedUpdateInput>
  }

  /**
   * AuditOption delete
   */
  export type AuditOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditOption
     */
    select?: AuditOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditOption
     */
    omit?: AuditOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditOptionInclude<ExtArgs> | null
    /**
     * Filter which AuditOption to delete.
     */
    where: AuditOptionWhereUniqueInput
  }

  /**
   * AuditOption deleteMany
   */
  export type AuditOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditOptions to delete
     */
    where?: AuditOptionWhereInput
    /**
     * Limit how many AuditOptions to delete.
     */
    limit?: number
  }

  /**
   * AuditOption.answers
   */
  export type AuditOption$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditAnswer
     */
    select?: AuditAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditAnswer
     */
    omit?: AuditAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditAnswerInclude<ExtArgs> | null
    where?: AuditAnswerWhereInput
    orderBy?: AuditAnswerOrderByWithRelationInput | AuditAnswerOrderByWithRelationInput[]
    cursor?: AuditAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditAnswerScalarFieldEnum | AuditAnswerScalarFieldEnum[]
  }

  /**
   * AuditOption without action
   */
  export type AuditOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditOption
     */
    select?: AuditOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditOption
     */
    omit?: AuditOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditOptionInclude<ExtArgs> | null
  }


  /**
   * Model AuditSession
   */

  export type AggregateAuditSession = {
    _count: AuditSessionCountAggregateOutputType | null
    _min: AuditSessionMinAggregateOutputType | null
    _max: AuditSessionMaxAggregateOutputType | null
  }

  export type AuditSessionMinAggregateOutputType = {
    id: string | null
    templateId: string | null
    status: $Enums.SessionStatus | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type AuditSessionMaxAggregateOutputType = {
    id: string | null
    templateId: string | null
    status: $Enums.SessionStatus | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type AuditSessionCountAggregateOutputType = {
    id: number
    templateId: number
    status: number
    startedAt: number
    completedAt: number
    createdAt: number
    _all: number
  }


  export type AuditSessionMinAggregateInputType = {
    id?: true
    templateId?: true
    status?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
  }

  export type AuditSessionMaxAggregateInputType = {
    id?: true
    templateId?: true
    status?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
  }

  export type AuditSessionCountAggregateInputType = {
    id?: true
    templateId?: true
    status?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    _all?: true
  }

  export type AuditSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditSession to aggregate.
     */
    where?: AuditSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditSessions to fetch.
     */
    orderBy?: AuditSessionOrderByWithRelationInput | AuditSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditSessions
    **/
    _count?: true | AuditSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditSessionMaxAggregateInputType
  }

  export type GetAuditSessionAggregateType<T extends AuditSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditSession[P]>
      : GetScalarType<T[P], AggregateAuditSession[P]>
  }




  export type AuditSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditSessionWhereInput
    orderBy?: AuditSessionOrderByWithAggregationInput | AuditSessionOrderByWithAggregationInput[]
    by: AuditSessionScalarFieldEnum[] | AuditSessionScalarFieldEnum
    having?: AuditSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditSessionCountAggregateInputType | true
    _min?: AuditSessionMinAggregateInputType
    _max?: AuditSessionMaxAggregateInputType
  }

  export type AuditSessionGroupByOutputType = {
    id: string
    templateId: string
    status: $Enums.SessionStatus
    startedAt: Date
    completedAt: Date | null
    createdAt: Date
    _count: AuditSessionCountAggregateOutputType | null
    _min: AuditSessionMinAggregateOutputType | null
    _max: AuditSessionMaxAggregateOutputType | null
  }

  type GetAuditSessionGroupByPayload<T extends AuditSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditSessionGroupByOutputType[P]>
            : GetScalarType<T[P], AuditSessionGroupByOutputType[P]>
        }
      >
    >


  export type AuditSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    template?: boolean | AuditTemplateDefaultArgs<ExtArgs>
    answers?: boolean | AuditSession$answersArgs<ExtArgs>
    result?: boolean | AuditSession$resultArgs<ExtArgs>
    lead?: boolean | AuditSession$leadArgs<ExtArgs>
    _count?: boolean | AuditSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditSession"]>

  export type AuditSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    template?: boolean | AuditTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditSession"]>

  export type AuditSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    template?: boolean | AuditTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditSession"]>

  export type AuditSessionSelectScalar = {
    id?: boolean
    templateId?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
  }

  export type AuditSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "templateId" | "status" | "startedAt" | "completedAt" | "createdAt", ExtArgs["result"]["auditSession"]>
  export type AuditSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | AuditTemplateDefaultArgs<ExtArgs>
    answers?: boolean | AuditSession$answersArgs<ExtArgs>
    result?: boolean | AuditSession$resultArgs<ExtArgs>
    lead?: boolean | AuditSession$leadArgs<ExtArgs>
    _count?: boolean | AuditSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AuditSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | AuditTemplateDefaultArgs<ExtArgs>
  }
  export type AuditSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | AuditTemplateDefaultArgs<ExtArgs>
  }

  export type $AuditSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditSession"
    objects: {
      template: Prisma.$AuditTemplatePayload<ExtArgs>
      answers: Prisma.$AuditAnswerPayload<ExtArgs>[]
      result: Prisma.$AuditResultPayload<ExtArgs> | null
      lead: Prisma.$AuditLeadPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      templateId: string
      status: $Enums.SessionStatus
      startedAt: Date
      completedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["auditSession"]>
    composites: {}
  }

  type AuditSessionGetPayload<S extends boolean | null | undefined | AuditSessionDefaultArgs> = $Result.GetResult<Prisma.$AuditSessionPayload, S>

  type AuditSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditSessionCountAggregateInputType | true
    }

  export interface AuditSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditSession'], meta: { name: 'AuditSession' } }
    /**
     * Find zero or one AuditSession that matches the filter.
     * @param {AuditSessionFindUniqueArgs} args - Arguments to find a AuditSession
     * @example
     * // Get one AuditSession
     * const auditSession = await prisma.auditSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditSessionFindUniqueArgs>(args: SelectSubset<T, AuditSessionFindUniqueArgs<ExtArgs>>): Prisma__AuditSessionClient<$Result.GetResult<Prisma.$AuditSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditSessionFindUniqueOrThrowArgs} args - Arguments to find a AuditSession
     * @example
     * // Get one AuditSession
     * const auditSession = await prisma.auditSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditSessionClient<$Result.GetResult<Prisma.$AuditSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditSessionFindFirstArgs} args - Arguments to find a AuditSession
     * @example
     * // Get one AuditSession
     * const auditSession = await prisma.auditSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditSessionFindFirstArgs>(args?: SelectSubset<T, AuditSessionFindFirstArgs<ExtArgs>>): Prisma__AuditSessionClient<$Result.GetResult<Prisma.$AuditSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditSessionFindFirstOrThrowArgs} args - Arguments to find a AuditSession
     * @example
     * // Get one AuditSession
     * const auditSession = await prisma.auditSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditSessionClient<$Result.GetResult<Prisma.$AuditSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditSessions
     * const auditSessions = await prisma.auditSession.findMany()
     * 
     * // Get first 10 AuditSessions
     * const auditSessions = await prisma.auditSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditSessionWithIdOnly = await prisma.auditSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditSessionFindManyArgs>(args?: SelectSubset<T, AuditSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditSession.
     * @param {AuditSessionCreateArgs} args - Arguments to create a AuditSession.
     * @example
     * // Create one AuditSession
     * const AuditSession = await prisma.auditSession.create({
     *   data: {
     *     // ... data to create a AuditSession
     *   }
     * })
     * 
     */
    create<T extends AuditSessionCreateArgs>(args: SelectSubset<T, AuditSessionCreateArgs<ExtArgs>>): Prisma__AuditSessionClient<$Result.GetResult<Prisma.$AuditSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditSessions.
     * @param {AuditSessionCreateManyArgs} args - Arguments to create many AuditSessions.
     * @example
     * // Create many AuditSessions
     * const auditSession = await prisma.auditSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditSessionCreateManyArgs>(args?: SelectSubset<T, AuditSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditSessions and returns the data saved in the database.
     * @param {AuditSessionCreateManyAndReturnArgs} args - Arguments to create many AuditSessions.
     * @example
     * // Create many AuditSessions
     * const auditSession = await prisma.auditSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditSessions and only return the `id`
     * const auditSessionWithIdOnly = await prisma.auditSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditSession.
     * @param {AuditSessionDeleteArgs} args - Arguments to delete one AuditSession.
     * @example
     * // Delete one AuditSession
     * const AuditSession = await prisma.auditSession.delete({
     *   where: {
     *     // ... filter to delete one AuditSession
     *   }
     * })
     * 
     */
    delete<T extends AuditSessionDeleteArgs>(args: SelectSubset<T, AuditSessionDeleteArgs<ExtArgs>>): Prisma__AuditSessionClient<$Result.GetResult<Prisma.$AuditSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditSession.
     * @param {AuditSessionUpdateArgs} args - Arguments to update one AuditSession.
     * @example
     * // Update one AuditSession
     * const auditSession = await prisma.auditSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditSessionUpdateArgs>(args: SelectSubset<T, AuditSessionUpdateArgs<ExtArgs>>): Prisma__AuditSessionClient<$Result.GetResult<Prisma.$AuditSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditSessions.
     * @param {AuditSessionDeleteManyArgs} args - Arguments to filter AuditSessions to delete.
     * @example
     * // Delete a few AuditSessions
     * const { count } = await prisma.auditSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditSessionDeleteManyArgs>(args?: SelectSubset<T, AuditSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditSessions
     * const auditSession = await prisma.auditSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditSessionUpdateManyArgs>(args: SelectSubset<T, AuditSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditSessions and returns the data updated in the database.
     * @param {AuditSessionUpdateManyAndReturnArgs} args - Arguments to update many AuditSessions.
     * @example
     * // Update many AuditSessions
     * const auditSession = await prisma.auditSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditSessions and only return the `id`
     * const auditSessionWithIdOnly = await prisma.auditSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditSession.
     * @param {AuditSessionUpsertArgs} args - Arguments to update or create a AuditSession.
     * @example
     * // Update or create a AuditSession
     * const auditSession = await prisma.auditSession.upsert({
     *   create: {
     *     // ... data to create a AuditSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditSession we want to update
     *   }
     * })
     */
    upsert<T extends AuditSessionUpsertArgs>(args: SelectSubset<T, AuditSessionUpsertArgs<ExtArgs>>): Prisma__AuditSessionClient<$Result.GetResult<Prisma.$AuditSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditSessionCountArgs} args - Arguments to filter AuditSessions to count.
     * @example
     * // Count the number of AuditSessions
     * const count = await prisma.auditSession.count({
     *   where: {
     *     // ... the filter for the AuditSessions we want to count
     *   }
     * })
    **/
    count<T extends AuditSessionCountArgs>(
      args?: Subset<T, AuditSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditSessionAggregateArgs>(args: Subset<T, AuditSessionAggregateArgs>): Prisma.PrismaPromise<GetAuditSessionAggregateType<T>>

    /**
     * Group by AuditSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditSessionGroupByArgs['orderBy'] }
        : { orderBy?: AuditSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditSession model
   */
  readonly fields: AuditSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    template<T extends AuditTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuditTemplateDefaultArgs<ExtArgs>>): Prisma__AuditTemplateClient<$Result.GetResult<Prisma.$AuditTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends AuditSession$answersArgs<ExtArgs> = {}>(args?: Subset<T, AuditSession$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    result<T extends AuditSession$resultArgs<ExtArgs> = {}>(args?: Subset<T, AuditSession$resultArgs<ExtArgs>>): Prisma__AuditResultClient<$Result.GetResult<Prisma.$AuditResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    lead<T extends AuditSession$leadArgs<ExtArgs> = {}>(args?: Subset<T, AuditSession$leadArgs<ExtArgs>>): Prisma__AuditLeadClient<$Result.GetResult<Prisma.$AuditLeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditSession model
   */
  interface AuditSessionFieldRefs {
    readonly id: FieldRef<"AuditSession", 'String'>
    readonly templateId: FieldRef<"AuditSession", 'String'>
    readonly status: FieldRef<"AuditSession", 'SessionStatus'>
    readonly startedAt: FieldRef<"AuditSession", 'DateTime'>
    readonly completedAt: FieldRef<"AuditSession", 'DateTime'>
    readonly createdAt: FieldRef<"AuditSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditSession findUnique
   */
  export type AuditSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSession
     */
    select?: AuditSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSession
     */
    omit?: AuditSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuditSession to fetch.
     */
    where: AuditSessionWhereUniqueInput
  }

  /**
   * AuditSession findUniqueOrThrow
   */
  export type AuditSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSession
     */
    select?: AuditSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSession
     */
    omit?: AuditSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuditSession to fetch.
     */
    where: AuditSessionWhereUniqueInput
  }

  /**
   * AuditSession findFirst
   */
  export type AuditSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSession
     */
    select?: AuditSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSession
     */
    omit?: AuditSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuditSession to fetch.
     */
    where?: AuditSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditSessions to fetch.
     */
    orderBy?: AuditSessionOrderByWithRelationInput | AuditSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditSessions.
     */
    cursor?: AuditSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditSessions.
     */
    distinct?: AuditSessionScalarFieldEnum | AuditSessionScalarFieldEnum[]
  }

  /**
   * AuditSession findFirstOrThrow
   */
  export type AuditSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSession
     */
    select?: AuditSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSession
     */
    omit?: AuditSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuditSession to fetch.
     */
    where?: AuditSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditSessions to fetch.
     */
    orderBy?: AuditSessionOrderByWithRelationInput | AuditSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditSessions.
     */
    cursor?: AuditSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditSessions.
     */
    distinct?: AuditSessionScalarFieldEnum | AuditSessionScalarFieldEnum[]
  }

  /**
   * AuditSession findMany
   */
  export type AuditSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSession
     */
    select?: AuditSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSession
     */
    omit?: AuditSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuditSessions to fetch.
     */
    where?: AuditSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditSessions to fetch.
     */
    orderBy?: AuditSessionOrderByWithRelationInput | AuditSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditSessions.
     */
    cursor?: AuditSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditSessions.
     */
    skip?: number
    distinct?: AuditSessionScalarFieldEnum | AuditSessionScalarFieldEnum[]
  }

  /**
   * AuditSession create
   */
  export type AuditSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSession
     */
    select?: AuditSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSession
     */
    omit?: AuditSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditSession.
     */
    data: XOR<AuditSessionCreateInput, AuditSessionUncheckedCreateInput>
  }

  /**
   * AuditSession createMany
   */
  export type AuditSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditSessions.
     */
    data: AuditSessionCreateManyInput | AuditSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditSession createManyAndReturn
   */
  export type AuditSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSession
     */
    select?: AuditSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSession
     */
    omit?: AuditSessionOmit<ExtArgs> | null
    /**
     * The data used to create many AuditSessions.
     */
    data: AuditSessionCreateManyInput | AuditSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditSession update
   */
  export type AuditSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSession
     */
    select?: AuditSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSession
     */
    omit?: AuditSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditSession.
     */
    data: XOR<AuditSessionUpdateInput, AuditSessionUncheckedUpdateInput>
    /**
     * Choose, which AuditSession to update.
     */
    where: AuditSessionWhereUniqueInput
  }

  /**
   * AuditSession updateMany
   */
  export type AuditSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditSessions.
     */
    data: XOR<AuditSessionUpdateManyMutationInput, AuditSessionUncheckedUpdateManyInput>
    /**
     * Filter which AuditSessions to update
     */
    where?: AuditSessionWhereInput
    /**
     * Limit how many AuditSessions to update.
     */
    limit?: number
  }

  /**
   * AuditSession updateManyAndReturn
   */
  export type AuditSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSession
     */
    select?: AuditSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSession
     */
    omit?: AuditSessionOmit<ExtArgs> | null
    /**
     * The data used to update AuditSessions.
     */
    data: XOR<AuditSessionUpdateManyMutationInput, AuditSessionUncheckedUpdateManyInput>
    /**
     * Filter which AuditSessions to update
     */
    where?: AuditSessionWhereInput
    /**
     * Limit how many AuditSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditSession upsert
   */
  export type AuditSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSession
     */
    select?: AuditSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSession
     */
    omit?: AuditSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditSession to update in case it exists.
     */
    where: AuditSessionWhereUniqueInput
    /**
     * In case the AuditSession found by the `where` argument doesn't exist, create a new AuditSession with this data.
     */
    create: XOR<AuditSessionCreateInput, AuditSessionUncheckedCreateInput>
    /**
     * In case the AuditSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditSessionUpdateInput, AuditSessionUncheckedUpdateInput>
  }

  /**
   * AuditSession delete
   */
  export type AuditSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSession
     */
    select?: AuditSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSession
     */
    omit?: AuditSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSessionInclude<ExtArgs> | null
    /**
     * Filter which AuditSession to delete.
     */
    where: AuditSessionWhereUniqueInput
  }

  /**
   * AuditSession deleteMany
   */
  export type AuditSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditSessions to delete
     */
    where?: AuditSessionWhereInput
    /**
     * Limit how many AuditSessions to delete.
     */
    limit?: number
  }

  /**
   * AuditSession.answers
   */
  export type AuditSession$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditAnswer
     */
    select?: AuditAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditAnswer
     */
    omit?: AuditAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditAnswerInclude<ExtArgs> | null
    where?: AuditAnswerWhereInput
    orderBy?: AuditAnswerOrderByWithRelationInput | AuditAnswerOrderByWithRelationInput[]
    cursor?: AuditAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditAnswerScalarFieldEnum | AuditAnswerScalarFieldEnum[]
  }

  /**
   * AuditSession.result
   */
  export type AuditSession$resultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditResult
     */
    select?: AuditResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditResult
     */
    omit?: AuditResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditResultInclude<ExtArgs> | null
    where?: AuditResultWhereInput
  }

  /**
   * AuditSession.lead
   */
  export type AuditSession$leadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLead
     */
    select?: AuditLeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLead
     */
    omit?: AuditLeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLeadInclude<ExtArgs> | null
    where?: AuditLeadWhereInput
  }

  /**
   * AuditSession without action
   */
  export type AuditSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSession
     */
    select?: AuditSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSession
     */
    omit?: AuditSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSessionInclude<ExtArgs> | null
  }


  /**
   * Model AuditAnswer
   */

  export type AggregateAuditAnswer = {
    _count: AuditAnswerCountAggregateOutputType | null
    _avg: AuditAnswerAvgAggregateOutputType | null
    _sum: AuditAnswerSumAggregateOutputType | null
    _min: AuditAnswerMinAggregateOutputType | null
    _max: AuditAnswerMaxAggregateOutputType | null
  }

  export type AuditAnswerAvgAggregateOutputType = {
    pointsAwarded: number | null
  }

  export type AuditAnswerSumAggregateOutputType = {
    pointsAwarded: number | null
  }

  export type AuditAnswerMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    questionId: string | null
    optionId: string | null
    pointsAwarded: number | null
    answeredAt: Date | null
  }

  export type AuditAnswerMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    questionId: string | null
    optionId: string | null
    pointsAwarded: number | null
    answeredAt: Date | null
  }

  export type AuditAnswerCountAggregateOutputType = {
    id: number
    sessionId: number
    questionId: number
    optionId: number
    pointsAwarded: number
    answeredAt: number
    _all: number
  }


  export type AuditAnswerAvgAggregateInputType = {
    pointsAwarded?: true
  }

  export type AuditAnswerSumAggregateInputType = {
    pointsAwarded?: true
  }

  export type AuditAnswerMinAggregateInputType = {
    id?: true
    sessionId?: true
    questionId?: true
    optionId?: true
    pointsAwarded?: true
    answeredAt?: true
  }

  export type AuditAnswerMaxAggregateInputType = {
    id?: true
    sessionId?: true
    questionId?: true
    optionId?: true
    pointsAwarded?: true
    answeredAt?: true
  }

  export type AuditAnswerCountAggregateInputType = {
    id?: true
    sessionId?: true
    questionId?: true
    optionId?: true
    pointsAwarded?: true
    answeredAt?: true
    _all?: true
  }

  export type AuditAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditAnswer to aggregate.
     */
    where?: AuditAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditAnswers to fetch.
     */
    orderBy?: AuditAnswerOrderByWithRelationInput | AuditAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditAnswers
    **/
    _count?: true | AuditAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditAnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditAnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditAnswerMaxAggregateInputType
  }

  export type GetAuditAnswerAggregateType<T extends AuditAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditAnswer[P]>
      : GetScalarType<T[P], AggregateAuditAnswer[P]>
  }




  export type AuditAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditAnswerWhereInput
    orderBy?: AuditAnswerOrderByWithAggregationInput | AuditAnswerOrderByWithAggregationInput[]
    by: AuditAnswerScalarFieldEnum[] | AuditAnswerScalarFieldEnum
    having?: AuditAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditAnswerCountAggregateInputType | true
    _avg?: AuditAnswerAvgAggregateInputType
    _sum?: AuditAnswerSumAggregateInputType
    _min?: AuditAnswerMinAggregateInputType
    _max?: AuditAnswerMaxAggregateInputType
  }

  export type AuditAnswerGroupByOutputType = {
    id: string
    sessionId: string
    questionId: string
    optionId: string
    pointsAwarded: number
    answeredAt: Date
    _count: AuditAnswerCountAggregateOutputType | null
    _avg: AuditAnswerAvgAggregateOutputType | null
    _sum: AuditAnswerSumAggregateOutputType | null
    _min: AuditAnswerMinAggregateOutputType | null
    _max: AuditAnswerMaxAggregateOutputType | null
  }

  type GetAuditAnswerGroupByPayload<T extends AuditAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AuditAnswerGroupByOutputType[P]>
        }
      >
    >


  export type AuditAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    questionId?: boolean
    optionId?: boolean
    pointsAwarded?: boolean
    answeredAt?: boolean
    session?: boolean | AuditSessionDefaultArgs<ExtArgs>
    question?: boolean | AuditQuestionDefaultArgs<ExtArgs>
    option?: boolean | AuditOptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditAnswer"]>

  export type AuditAnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    questionId?: boolean
    optionId?: boolean
    pointsAwarded?: boolean
    answeredAt?: boolean
    session?: boolean | AuditSessionDefaultArgs<ExtArgs>
    question?: boolean | AuditQuestionDefaultArgs<ExtArgs>
    option?: boolean | AuditOptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditAnswer"]>

  export type AuditAnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    questionId?: boolean
    optionId?: boolean
    pointsAwarded?: boolean
    answeredAt?: boolean
    session?: boolean | AuditSessionDefaultArgs<ExtArgs>
    question?: boolean | AuditQuestionDefaultArgs<ExtArgs>
    option?: boolean | AuditOptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditAnswer"]>

  export type AuditAnswerSelectScalar = {
    id?: boolean
    sessionId?: boolean
    questionId?: boolean
    optionId?: boolean
    pointsAwarded?: boolean
    answeredAt?: boolean
  }

  export type AuditAnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "questionId" | "optionId" | "pointsAwarded" | "answeredAt", ExtArgs["result"]["auditAnswer"]>
  export type AuditAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | AuditSessionDefaultArgs<ExtArgs>
    question?: boolean | AuditQuestionDefaultArgs<ExtArgs>
    option?: boolean | AuditOptionDefaultArgs<ExtArgs>
  }
  export type AuditAnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | AuditSessionDefaultArgs<ExtArgs>
    question?: boolean | AuditQuestionDefaultArgs<ExtArgs>
    option?: boolean | AuditOptionDefaultArgs<ExtArgs>
  }
  export type AuditAnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | AuditSessionDefaultArgs<ExtArgs>
    question?: boolean | AuditQuestionDefaultArgs<ExtArgs>
    option?: boolean | AuditOptionDefaultArgs<ExtArgs>
  }

  export type $AuditAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditAnswer"
    objects: {
      session: Prisma.$AuditSessionPayload<ExtArgs>
      question: Prisma.$AuditQuestionPayload<ExtArgs>
      option: Prisma.$AuditOptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      questionId: string
      optionId: string
      pointsAwarded: number
      answeredAt: Date
    }, ExtArgs["result"]["auditAnswer"]>
    composites: {}
  }

  type AuditAnswerGetPayload<S extends boolean | null | undefined | AuditAnswerDefaultArgs> = $Result.GetResult<Prisma.$AuditAnswerPayload, S>

  type AuditAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditAnswerCountAggregateInputType | true
    }

  export interface AuditAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditAnswer'], meta: { name: 'AuditAnswer' } }
    /**
     * Find zero or one AuditAnswer that matches the filter.
     * @param {AuditAnswerFindUniqueArgs} args - Arguments to find a AuditAnswer
     * @example
     * // Get one AuditAnswer
     * const auditAnswer = await prisma.auditAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditAnswerFindUniqueArgs>(args: SelectSubset<T, AuditAnswerFindUniqueArgs<ExtArgs>>): Prisma__AuditAnswerClient<$Result.GetResult<Prisma.$AuditAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditAnswer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditAnswerFindUniqueOrThrowArgs} args - Arguments to find a AuditAnswer
     * @example
     * // Get one AuditAnswer
     * const auditAnswer = await prisma.auditAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditAnswerClient<$Result.GetResult<Prisma.$AuditAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditAnswerFindFirstArgs} args - Arguments to find a AuditAnswer
     * @example
     * // Get one AuditAnswer
     * const auditAnswer = await prisma.auditAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditAnswerFindFirstArgs>(args?: SelectSubset<T, AuditAnswerFindFirstArgs<ExtArgs>>): Prisma__AuditAnswerClient<$Result.GetResult<Prisma.$AuditAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditAnswerFindFirstOrThrowArgs} args - Arguments to find a AuditAnswer
     * @example
     * // Get one AuditAnswer
     * const auditAnswer = await prisma.auditAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditAnswerClient<$Result.GetResult<Prisma.$AuditAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditAnswers
     * const auditAnswers = await prisma.auditAnswer.findMany()
     * 
     * // Get first 10 AuditAnswers
     * const auditAnswers = await prisma.auditAnswer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditAnswerWithIdOnly = await prisma.auditAnswer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditAnswerFindManyArgs>(args?: SelectSubset<T, AuditAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditAnswer.
     * @param {AuditAnswerCreateArgs} args - Arguments to create a AuditAnswer.
     * @example
     * // Create one AuditAnswer
     * const AuditAnswer = await prisma.auditAnswer.create({
     *   data: {
     *     // ... data to create a AuditAnswer
     *   }
     * })
     * 
     */
    create<T extends AuditAnswerCreateArgs>(args: SelectSubset<T, AuditAnswerCreateArgs<ExtArgs>>): Prisma__AuditAnswerClient<$Result.GetResult<Prisma.$AuditAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditAnswers.
     * @param {AuditAnswerCreateManyArgs} args - Arguments to create many AuditAnswers.
     * @example
     * // Create many AuditAnswers
     * const auditAnswer = await prisma.auditAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditAnswerCreateManyArgs>(args?: SelectSubset<T, AuditAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditAnswers and returns the data saved in the database.
     * @param {AuditAnswerCreateManyAndReturnArgs} args - Arguments to create many AuditAnswers.
     * @example
     * // Create many AuditAnswers
     * const auditAnswer = await prisma.auditAnswer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditAnswers and only return the `id`
     * const auditAnswerWithIdOnly = await prisma.auditAnswer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditAnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditAnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditAnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditAnswer.
     * @param {AuditAnswerDeleteArgs} args - Arguments to delete one AuditAnswer.
     * @example
     * // Delete one AuditAnswer
     * const AuditAnswer = await prisma.auditAnswer.delete({
     *   where: {
     *     // ... filter to delete one AuditAnswer
     *   }
     * })
     * 
     */
    delete<T extends AuditAnswerDeleteArgs>(args: SelectSubset<T, AuditAnswerDeleteArgs<ExtArgs>>): Prisma__AuditAnswerClient<$Result.GetResult<Prisma.$AuditAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditAnswer.
     * @param {AuditAnswerUpdateArgs} args - Arguments to update one AuditAnswer.
     * @example
     * // Update one AuditAnswer
     * const auditAnswer = await prisma.auditAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditAnswerUpdateArgs>(args: SelectSubset<T, AuditAnswerUpdateArgs<ExtArgs>>): Prisma__AuditAnswerClient<$Result.GetResult<Prisma.$AuditAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditAnswers.
     * @param {AuditAnswerDeleteManyArgs} args - Arguments to filter AuditAnswers to delete.
     * @example
     * // Delete a few AuditAnswers
     * const { count } = await prisma.auditAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditAnswerDeleteManyArgs>(args?: SelectSubset<T, AuditAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditAnswers
     * const auditAnswer = await prisma.auditAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditAnswerUpdateManyArgs>(args: SelectSubset<T, AuditAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditAnswers and returns the data updated in the database.
     * @param {AuditAnswerUpdateManyAndReturnArgs} args - Arguments to update many AuditAnswers.
     * @example
     * // Update many AuditAnswers
     * const auditAnswer = await prisma.auditAnswer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditAnswers and only return the `id`
     * const auditAnswerWithIdOnly = await prisma.auditAnswer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditAnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditAnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditAnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditAnswer.
     * @param {AuditAnswerUpsertArgs} args - Arguments to update or create a AuditAnswer.
     * @example
     * // Update or create a AuditAnswer
     * const auditAnswer = await prisma.auditAnswer.upsert({
     *   create: {
     *     // ... data to create a AuditAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditAnswer we want to update
     *   }
     * })
     */
    upsert<T extends AuditAnswerUpsertArgs>(args: SelectSubset<T, AuditAnswerUpsertArgs<ExtArgs>>): Prisma__AuditAnswerClient<$Result.GetResult<Prisma.$AuditAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditAnswerCountArgs} args - Arguments to filter AuditAnswers to count.
     * @example
     * // Count the number of AuditAnswers
     * const count = await prisma.auditAnswer.count({
     *   where: {
     *     // ... the filter for the AuditAnswers we want to count
     *   }
     * })
    **/
    count<T extends AuditAnswerCountArgs>(
      args?: Subset<T, AuditAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditAnswerAggregateArgs>(args: Subset<T, AuditAnswerAggregateArgs>): Prisma.PrismaPromise<GetAuditAnswerAggregateType<T>>

    /**
     * Group by AuditAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditAnswerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditAnswerGroupByArgs['orderBy'] }
        : { orderBy?: AuditAnswerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditAnswer model
   */
  readonly fields: AuditAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends AuditSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuditSessionDefaultArgs<ExtArgs>>): Prisma__AuditSessionClient<$Result.GetResult<Prisma.$AuditSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends AuditQuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuditQuestionDefaultArgs<ExtArgs>>): Prisma__AuditQuestionClient<$Result.GetResult<Prisma.$AuditQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    option<T extends AuditOptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuditOptionDefaultArgs<ExtArgs>>): Prisma__AuditOptionClient<$Result.GetResult<Prisma.$AuditOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditAnswer model
   */
  interface AuditAnswerFieldRefs {
    readonly id: FieldRef<"AuditAnswer", 'String'>
    readonly sessionId: FieldRef<"AuditAnswer", 'String'>
    readonly questionId: FieldRef<"AuditAnswer", 'String'>
    readonly optionId: FieldRef<"AuditAnswer", 'String'>
    readonly pointsAwarded: FieldRef<"AuditAnswer", 'Int'>
    readonly answeredAt: FieldRef<"AuditAnswer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditAnswer findUnique
   */
  export type AuditAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditAnswer
     */
    select?: AuditAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditAnswer
     */
    omit?: AuditAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditAnswerInclude<ExtArgs> | null
    /**
     * Filter, which AuditAnswer to fetch.
     */
    where: AuditAnswerWhereUniqueInput
  }

  /**
   * AuditAnswer findUniqueOrThrow
   */
  export type AuditAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditAnswer
     */
    select?: AuditAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditAnswer
     */
    omit?: AuditAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditAnswerInclude<ExtArgs> | null
    /**
     * Filter, which AuditAnswer to fetch.
     */
    where: AuditAnswerWhereUniqueInput
  }

  /**
   * AuditAnswer findFirst
   */
  export type AuditAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditAnswer
     */
    select?: AuditAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditAnswer
     */
    omit?: AuditAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditAnswerInclude<ExtArgs> | null
    /**
     * Filter, which AuditAnswer to fetch.
     */
    where?: AuditAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditAnswers to fetch.
     */
    orderBy?: AuditAnswerOrderByWithRelationInput | AuditAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditAnswers.
     */
    cursor?: AuditAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditAnswers.
     */
    distinct?: AuditAnswerScalarFieldEnum | AuditAnswerScalarFieldEnum[]
  }

  /**
   * AuditAnswer findFirstOrThrow
   */
  export type AuditAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditAnswer
     */
    select?: AuditAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditAnswer
     */
    omit?: AuditAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditAnswerInclude<ExtArgs> | null
    /**
     * Filter, which AuditAnswer to fetch.
     */
    where?: AuditAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditAnswers to fetch.
     */
    orderBy?: AuditAnswerOrderByWithRelationInput | AuditAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditAnswers.
     */
    cursor?: AuditAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditAnswers.
     */
    distinct?: AuditAnswerScalarFieldEnum | AuditAnswerScalarFieldEnum[]
  }

  /**
   * AuditAnswer findMany
   */
  export type AuditAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditAnswer
     */
    select?: AuditAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditAnswer
     */
    omit?: AuditAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditAnswerInclude<ExtArgs> | null
    /**
     * Filter, which AuditAnswers to fetch.
     */
    where?: AuditAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditAnswers to fetch.
     */
    orderBy?: AuditAnswerOrderByWithRelationInput | AuditAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditAnswers.
     */
    cursor?: AuditAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditAnswers.
     */
    skip?: number
    distinct?: AuditAnswerScalarFieldEnum | AuditAnswerScalarFieldEnum[]
  }

  /**
   * AuditAnswer create
   */
  export type AuditAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditAnswer
     */
    select?: AuditAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditAnswer
     */
    omit?: AuditAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditAnswer.
     */
    data: XOR<AuditAnswerCreateInput, AuditAnswerUncheckedCreateInput>
  }

  /**
   * AuditAnswer createMany
   */
  export type AuditAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditAnswers.
     */
    data: AuditAnswerCreateManyInput | AuditAnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditAnswer createManyAndReturn
   */
  export type AuditAnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditAnswer
     */
    select?: AuditAnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditAnswer
     */
    omit?: AuditAnswerOmit<ExtArgs> | null
    /**
     * The data used to create many AuditAnswers.
     */
    data: AuditAnswerCreateManyInput | AuditAnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditAnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditAnswer update
   */
  export type AuditAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditAnswer
     */
    select?: AuditAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditAnswer
     */
    omit?: AuditAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditAnswer.
     */
    data: XOR<AuditAnswerUpdateInput, AuditAnswerUncheckedUpdateInput>
    /**
     * Choose, which AuditAnswer to update.
     */
    where: AuditAnswerWhereUniqueInput
  }

  /**
   * AuditAnswer updateMany
   */
  export type AuditAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditAnswers.
     */
    data: XOR<AuditAnswerUpdateManyMutationInput, AuditAnswerUncheckedUpdateManyInput>
    /**
     * Filter which AuditAnswers to update
     */
    where?: AuditAnswerWhereInput
    /**
     * Limit how many AuditAnswers to update.
     */
    limit?: number
  }

  /**
   * AuditAnswer updateManyAndReturn
   */
  export type AuditAnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditAnswer
     */
    select?: AuditAnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditAnswer
     */
    omit?: AuditAnswerOmit<ExtArgs> | null
    /**
     * The data used to update AuditAnswers.
     */
    data: XOR<AuditAnswerUpdateManyMutationInput, AuditAnswerUncheckedUpdateManyInput>
    /**
     * Filter which AuditAnswers to update
     */
    where?: AuditAnswerWhereInput
    /**
     * Limit how many AuditAnswers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditAnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditAnswer upsert
   */
  export type AuditAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditAnswer
     */
    select?: AuditAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditAnswer
     */
    omit?: AuditAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditAnswer to update in case it exists.
     */
    where: AuditAnswerWhereUniqueInput
    /**
     * In case the AuditAnswer found by the `where` argument doesn't exist, create a new AuditAnswer with this data.
     */
    create: XOR<AuditAnswerCreateInput, AuditAnswerUncheckedCreateInput>
    /**
     * In case the AuditAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditAnswerUpdateInput, AuditAnswerUncheckedUpdateInput>
  }

  /**
   * AuditAnswer delete
   */
  export type AuditAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditAnswer
     */
    select?: AuditAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditAnswer
     */
    omit?: AuditAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditAnswerInclude<ExtArgs> | null
    /**
     * Filter which AuditAnswer to delete.
     */
    where: AuditAnswerWhereUniqueInput
  }

  /**
   * AuditAnswer deleteMany
   */
  export type AuditAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditAnswers to delete
     */
    where?: AuditAnswerWhereInput
    /**
     * Limit how many AuditAnswers to delete.
     */
    limit?: number
  }

  /**
   * AuditAnswer without action
   */
  export type AuditAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditAnswer
     */
    select?: AuditAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditAnswer
     */
    omit?: AuditAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditAnswerInclude<ExtArgs> | null
  }


  /**
   * Model AuditResult
   */

  export type AggregateAuditResult = {
    _count: AuditResultCountAggregateOutputType | null
    _avg: AuditResultAvgAggregateOutputType | null
    _sum: AuditResultSumAggregateOutputType | null
    _min: AuditResultMinAggregateOutputType | null
    _max: AuditResultMaxAggregateOutputType | null
  }

  export type AuditResultAvgAggregateOutputType = {
    totalScore: number | null
    maxScore: number | null
  }

  export type AuditResultSumAggregateOutputType = {
    totalScore: number | null
    maxScore: number | null
  }

  export type AuditResultMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    totalScore: number | null
    maxScore: number | null
    tier: string | null
    message: string | null
    locked: boolean | null
    calculatedAt: Date | null
  }

  export type AuditResultMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    totalScore: number | null
    maxScore: number | null
    tier: string | null
    message: string | null
    locked: boolean | null
    calculatedAt: Date | null
  }

  export type AuditResultCountAggregateOutputType = {
    id: number
    sessionId: number
    totalScore: number
    maxScore: number
    tier: number
    message: number
    sectionScores: number
    locked: number
    calculatedAt: number
    _all: number
  }


  export type AuditResultAvgAggregateInputType = {
    totalScore?: true
    maxScore?: true
  }

  export type AuditResultSumAggregateInputType = {
    totalScore?: true
    maxScore?: true
  }

  export type AuditResultMinAggregateInputType = {
    id?: true
    sessionId?: true
    totalScore?: true
    maxScore?: true
    tier?: true
    message?: true
    locked?: true
    calculatedAt?: true
  }

  export type AuditResultMaxAggregateInputType = {
    id?: true
    sessionId?: true
    totalScore?: true
    maxScore?: true
    tier?: true
    message?: true
    locked?: true
    calculatedAt?: true
  }

  export type AuditResultCountAggregateInputType = {
    id?: true
    sessionId?: true
    totalScore?: true
    maxScore?: true
    tier?: true
    message?: true
    sectionScores?: true
    locked?: true
    calculatedAt?: true
    _all?: true
  }

  export type AuditResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditResult to aggregate.
     */
    where?: AuditResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditResults to fetch.
     */
    orderBy?: AuditResultOrderByWithRelationInput | AuditResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditResults
    **/
    _count?: true | AuditResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditResultMaxAggregateInputType
  }

  export type GetAuditResultAggregateType<T extends AuditResultAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditResult[P]>
      : GetScalarType<T[P], AggregateAuditResult[P]>
  }




  export type AuditResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditResultWhereInput
    orderBy?: AuditResultOrderByWithAggregationInput | AuditResultOrderByWithAggregationInput[]
    by: AuditResultScalarFieldEnum[] | AuditResultScalarFieldEnum
    having?: AuditResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditResultCountAggregateInputType | true
    _avg?: AuditResultAvgAggregateInputType
    _sum?: AuditResultSumAggregateInputType
    _min?: AuditResultMinAggregateInputType
    _max?: AuditResultMaxAggregateInputType
  }

  export type AuditResultGroupByOutputType = {
    id: string
    sessionId: string
    totalScore: number
    maxScore: number
    tier: string
    message: string
    sectionScores: JsonValue
    locked: boolean
    calculatedAt: Date
    _count: AuditResultCountAggregateOutputType | null
    _avg: AuditResultAvgAggregateOutputType | null
    _sum: AuditResultSumAggregateOutputType | null
    _min: AuditResultMinAggregateOutputType | null
    _max: AuditResultMaxAggregateOutputType | null
  }

  type GetAuditResultGroupByPayload<T extends AuditResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditResultGroupByOutputType[P]>
            : GetScalarType<T[P], AuditResultGroupByOutputType[P]>
        }
      >
    >


  export type AuditResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    totalScore?: boolean
    maxScore?: boolean
    tier?: boolean
    message?: boolean
    sectionScores?: boolean
    locked?: boolean
    calculatedAt?: boolean
    session?: boolean | AuditSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditResult"]>

  export type AuditResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    totalScore?: boolean
    maxScore?: boolean
    tier?: boolean
    message?: boolean
    sectionScores?: boolean
    locked?: boolean
    calculatedAt?: boolean
    session?: boolean | AuditSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditResult"]>

  export type AuditResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    totalScore?: boolean
    maxScore?: boolean
    tier?: boolean
    message?: boolean
    sectionScores?: boolean
    locked?: boolean
    calculatedAt?: boolean
    session?: boolean | AuditSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditResult"]>

  export type AuditResultSelectScalar = {
    id?: boolean
    sessionId?: boolean
    totalScore?: boolean
    maxScore?: boolean
    tier?: boolean
    message?: boolean
    sectionScores?: boolean
    locked?: boolean
    calculatedAt?: boolean
  }

  export type AuditResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "totalScore" | "maxScore" | "tier" | "message" | "sectionScores" | "locked" | "calculatedAt", ExtArgs["result"]["auditResult"]>
  export type AuditResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | AuditSessionDefaultArgs<ExtArgs>
  }
  export type AuditResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | AuditSessionDefaultArgs<ExtArgs>
  }
  export type AuditResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | AuditSessionDefaultArgs<ExtArgs>
  }

  export type $AuditResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditResult"
    objects: {
      session: Prisma.$AuditSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      totalScore: number
      maxScore: number
      tier: string
      message: string
      sectionScores: Prisma.JsonValue
      locked: boolean
      calculatedAt: Date
    }, ExtArgs["result"]["auditResult"]>
    composites: {}
  }

  type AuditResultGetPayload<S extends boolean | null | undefined | AuditResultDefaultArgs> = $Result.GetResult<Prisma.$AuditResultPayload, S>

  type AuditResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditResultCountAggregateInputType | true
    }

  export interface AuditResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditResult'], meta: { name: 'AuditResult' } }
    /**
     * Find zero or one AuditResult that matches the filter.
     * @param {AuditResultFindUniqueArgs} args - Arguments to find a AuditResult
     * @example
     * // Get one AuditResult
     * const auditResult = await prisma.auditResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditResultFindUniqueArgs>(args: SelectSubset<T, AuditResultFindUniqueArgs<ExtArgs>>): Prisma__AuditResultClient<$Result.GetResult<Prisma.$AuditResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditResultFindUniqueOrThrowArgs} args - Arguments to find a AuditResult
     * @example
     * // Get one AuditResult
     * const auditResult = await prisma.auditResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditResultFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditResultClient<$Result.GetResult<Prisma.$AuditResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditResultFindFirstArgs} args - Arguments to find a AuditResult
     * @example
     * // Get one AuditResult
     * const auditResult = await prisma.auditResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditResultFindFirstArgs>(args?: SelectSubset<T, AuditResultFindFirstArgs<ExtArgs>>): Prisma__AuditResultClient<$Result.GetResult<Prisma.$AuditResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditResultFindFirstOrThrowArgs} args - Arguments to find a AuditResult
     * @example
     * // Get one AuditResult
     * const auditResult = await prisma.auditResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditResultFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditResultClient<$Result.GetResult<Prisma.$AuditResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditResults
     * const auditResults = await prisma.auditResult.findMany()
     * 
     * // Get first 10 AuditResults
     * const auditResults = await prisma.auditResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditResultWithIdOnly = await prisma.auditResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditResultFindManyArgs>(args?: SelectSubset<T, AuditResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditResult.
     * @param {AuditResultCreateArgs} args - Arguments to create a AuditResult.
     * @example
     * // Create one AuditResult
     * const AuditResult = await prisma.auditResult.create({
     *   data: {
     *     // ... data to create a AuditResult
     *   }
     * })
     * 
     */
    create<T extends AuditResultCreateArgs>(args: SelectSubset<T, AuditResultCreateArgs<ExtArgs>>): Prisma__AuditResultClient<$Result.GetResult<Prisma.$AuditResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditResults.
     * @param {AuditResultCreateManyArgs} args - Arguments to create many AuditResults.
     * @example
     * // Create many AuditResults
     * const auditResult = await prisma.auditResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditResultCreateManyArgs>(args?: SelectSubset<T, AuditResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditResults and returns the data saved in the database.
     * @param {AuditResultCreateManyAndReturnArgs} args - Arguments to create many AuditResults.
     * @example
     * // Create many AuditResults
     * const auditResult = await prisma.auditResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditResults and only return the `id`
     * const auditResultWithIdOnly = await prisma.auditResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditResultCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditResult.
     * @param {AuditResultDeleteArgs} args - Arguments to delete one AuditResult.
     * @example
     * // Delete one AuditResult
     * const AuditResult = await prisma.auditResult.delete({
     *   where: {
     *     // ... filter to delete one AuditResult
     *   }
     * })
     * 
     */
    delete<T extends AuditResultDeleteArgs>(args: SelectSubset<T, AuditResultDeleteArgs<ExtArgs>>): Prisma__AuditResultClient<$Result.GetResult<Prisma.$AuditResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditResult.
     * @param {AuditResultUpdateArgs} args - Arguments to update one AuditResult.
     * @example
     * // Update one AuditResult
     * const auditResult = await prisma.auditResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditResultUpdateArgs>(args: SelectSubset<T, AuditResultUpdateArgs<ExtArgs>>): Prisma__AuditResultClient<$Result.GetResult<Prisma.$AuditResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditResults.
     * @param {AuditResultDeleteManyArgs} args - Arguments to filter AuditResults to delete.
     * @example
     * // Delete a few AuditResults
     * const { count } = await prisma.auditResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditResultDeleteManyArgs>(args?: SelectSubset<T, AuditResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditResults
     * const auditResult = await prisma.auditResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditResultUpdateManyArgs>(args: SelectSubset<T, AuditResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditResults and returns the data updated in the database.
     * @param {AuditResultUpdateManyAndReturnArgs} args - Arguments to update many AuditResults.
     * @example
     * // Update many AuditResults
     * const auditResult = await prisma.auditResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditResults and only return the `id`
     * const auditResultWithIdOnly = await prisma.auditResult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditResultUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditResult.
     * @param {AuditResultUpsertArgs} args - Arguments to update or create a AuditResult.
     * @example
     * // Update or create a AuditResult
     * const auditResult = await prisma.auditResult.upsert({
     *   create: {
     *     // ... data to create a AuditResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditResult we want to update
     *   }
     * })
     */
    upsert<T extends AuditResultUpsertArgs>(args: SelectSubset<T, AuditResultUpsertArgs<ExtArgs>>): Prisma__AuditResultClient<$Result.GetResult<Prisma.$AuditResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditResultCountArgs} args - Arguments to filter AuditResults to count.
     * @example
     * // Count the number of AuditResults
     * const count = await prisma.auditResult.count({
     *   where: {
     *     // ... the filter for the AuditResults we want to count
     *   }
     * })
    **/
    count<T extends AuditResultCountArgs>(
      args?: Subset<T, AuditResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditResultAggregateArgs>(args: Subset<T, AuditResultAggregateArgs>): Prisma.PrismaPromise<GetAuditResultAggregateType<T>>

    /**
     * Group by AuditResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditResultGroupByArgs['orderBy'] }
        : { orderBy?: AuditResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditResult model
   */
  readonly fields: AuditResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends AuditSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuditSessionDefaultArgs<ExtArgs>>): Prisma__AuditSessionClient<$Result.GetResult<Prisma.$AuditSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditResult model
   */
  interface AuditResultFieldRefs {
    readonly id: FieldRef<"AuditResult", 'String'>
    readonly sessionId: FieldRef<"AuditResult", 'String'>
    readonly totalScore: FieldRef<"AuditResult", 'Int'>
    readonly maxScore: FieldRef<"AuditResult", 'Int'>
    readonly tier: FieldRef<"AuditResult", 'String'>
    readonly message: FieldRef<"AuditResult", 'String'>
    readonly sectionScores: FieldRef<"AuditResult", 'Json'>
    readonly locked: FieldRef<"AuditResult", 'Boolean'>
    readonly calculatedAt: FieldRef<"AuditResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditResult findUnique
   */
  export type AuditResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditResult
     */
    select?: AuditResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditResult
     */
    omit?: AuditResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditResultInclude<ExtArgs> | null
    /**
     * Filter, which AuditResult to fetch.
     */
    where: AuditResultWhereUniqueInput
  }

  /**
   * AuditResult findUniqueOrThrow
   */
  export type AuditResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditResult
     */
    select?: AuditResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditResult
     */
    omit?: AuditResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditResultInclude<ExtArgs> | null
    /**
     * Filter, which AuditResult to fetch.
     */
    where: AuditResultWhereUniqueInput
  }

  /**
   * AuditResult findFirst
   */
  export type AuditResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditResult
     */
    select?: AuditResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditResult
     */
    omit?: AuditResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditResultInclude<ExtArgs> | null
    /**
     * Filter, which AuditResult to fetch.
     */
    where?: AuditResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditResults to fetch.
     */
    orderBy?: AuditResultOrderByWithRelationInput | AuditResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditResults.
     */
    cursor?: AuditResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditResults.
     */
    distinct?: AuditResultScalarFieldEnum | AuditResultScalarFieldEnum[]
  }

  /**
   * AuditResult findFirstOrThrow
   */
  export type AuditResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditResult
     */
    select?: AuditResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditResult
     */
    omit?: AuditResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditResultInclude<ExtArgs> | null
    /**
     * Filter, which AuditResult to fetch.
     */
    where?: AuditResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditResults to fetch.
     */
    orderBy?: AuditResultOrderByWithRelationInput | AuditResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditResults.
     */
    cursor?: AuditResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditResults.
     */
    distinct?: AuditResultScalarFieldEnum | AuditResultScalarFieldEnum[]
  }

  /**
   * AuditResult findMany
   */
  export type AuditResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditResult
     */
    select?: AuditResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditResult
     */
    omit?: AuditResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditResultInclude<ExtArgs> | null
    /**
     * Filter, which AuditResults to fetch.
     */
    where?: AuditResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditResults to fetch.
     */
    orderBy?: AuditResultOrderByWithRelationInput | AuditResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditResults.
     */
    cursor?: AuditResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditResults.
     */
    skip?: number
    distinct?: AuditResultScalarFieldEnum | AuditResultScalarFieldEnum[]
  }

  /**
   * AuditResult create
   */
  export type AuditResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditResult
     */
    select?: AuditResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditResult
     */
    omit?: AuditResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditResultInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditResult.
     */
    data: XOR<AuditResultCreateInput, AuditResultUncheckedCreateInput>
  }

  /**
   * AuditResult createMany
   */
  export type AuditResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditResults.
     */
    data: AuditResultCreateManyInput | AuditResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditResult createManyAndReturn
   */
  export type AuditResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditResult
     */
    select?: AuditResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditResult
     */
    omit?: AuditResultOmit<ExtArgs> | null
    /**
     * The data used to create many AuditResults.
     */
    data: AuditResultCreateManyInput | AuditResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditResult update
   */
  export type AuditResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditResult
     */
    select?: AuditResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditResult
     */
    omit?: AuditResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditResultInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditResult.
     */
    data: XOR<AuditResultUpdateInput, AuditResultUncheckedUpdateInput>
    /**
     * Choose, which AuditResult to update.
     */
    where: AuditResultWhereUniqueInput
  }

  /**
   * AuditResult updateMany
   */
  export type AuditResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditResults.
     */
    data: XOR<AuditResultUpdateManyMutationInput, AuditResultUncheckedUpdateManyInput>
    /**
     * Filter which AuditResults to update
     */
    where?: AuditResultWhereInput
    /**
     * Limit how many AuditResults to update.
     */
    limit?: number
  }

  /**
   * AuditResult updateManyAndReturn
   */
  export type AuditResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditResult
     */
    select?: AuditResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditResult
     */
    omit?: AuditResultOmit<ExtArgs> | null
    /**
     * The data used to update AuditResults.
     */
    data: XOR<AuditResultUpdateManyMutationInput, AuditResultUncheckedUpdateManyInput>
    /**
     * Filter which AuditResults to update
     */
    where?: AuditResultWhereInput
    /**
     * Limit how many AuditResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditResult upsert
   */
  export type AuditResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditResult
     */
    select?: AuditResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditResult
     */
    omit?: AuditResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditResultInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditResult to update in case it exists.
     */
    where: AuditResultWhereUniqueInput
    /**
     * In case the AuditResult found by the `where` argument doesn't exist, create a new AuditResult with this data.
     */
    create: XOR<AuditResultCreateInput, AuditResultUncheckedCreateInput>
    /**
     * In case the AuditResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditResultUpdateInput, AuditResultUncheckedUpdateInput>
  }

  /**
   * AuditResult delete
   */
  export type AuditResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditResult
     */
    select?: AuditResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditResult
     */
    omit?: AuditResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditResultInclude<ExtArgs> | null
    /**
     * Filter which AuditResult to delete.
     */
    where: AuditResultWhereUniqueInput
  }

  /**
   * AuditResult deleteMany
   */
  export type AuditResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditResults to delete
     */
    where?: AuditResultWhereInput
    /**
     * Limit how many AuditResults to delete.
     */
    limit?: number
  }

  /**
   * AuditResult without action
   */
  export type AuditResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditResult
     */
    select?: AuditResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditResult
     */
    omit?: AuditResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditResultInclude<ExtArgs> | null
  }


  /**
   * Model AuditLead
   */

  export type AggregateAuditLead = {
    _count: AuditLeadCountAggregateOutputType | null
    _min: AuditLeadMinAggregateOutputType | null
    _max: AuditLeadMaxAggregateOutputType | null
  }

  export type AuditLeadMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    fullName: string | null
    email: string | null
    phone: string | null
    companyName: string | null
    position: string | null
    createdAt: Date | null
  }

  export type AuditLeadMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    fullName: string | null
    email: string | null
    phone: string | null
    companyName: string | null
    position: string | null
    createdAt: Date | null
  }

  export type AuditLeadCountAggregateOutputType = {
    id: number
    sessionId: number
    fullName: number
    email: number
    phone: number
    companyName: number
    position: number
    createdAt: number
    _all: number
  }


  export type AuditLeadMinAggregateInputType = {
    id?: true
    sessionId?: true
    fullName?: true
    email?: true
    phone?: true
    companyName?: true
    position?: true
    createdAt?: true
  }

  export type AuditLeadMaxAggregateInputType = {
    id?: true
    sessionId?: true
    fullName?: true
    email?: true
    phone?: true
    companyName?: true
    position?: true
    createdAt?: true
  }

  export type AuditLeadCountAggregateInputType = {
    id?: true
    sessionId?: true
    fullName?: true
    email?: true
    phone?: true
    companyName?: true
    position?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLeadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLead to aggregate.
     */
    where?: AuditLeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLeads to fetch.
     */
    orderBy?: AuditLeadOrderByWithRelationInput | AuditLeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLeads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLeads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLeads
    **/
    _count?: true | AuditLeadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLeadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLeadMaxAggregateInputType
  }

  export type GetAuditLeadAggregateType<T extends AuditLeadAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLead[P]>
      : GetScalarType<T[P], AggregateAuditLead[P]>
  }




  export type AuditLeadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLeadWhereInput
    orderBy?: AuditLeadOrderByWithAggregationInput | AuditLeadOrderByWithAggregationInput[]
    by: AuditLeadScalarFieldEnum[] | AuditLeadScalarFieldEnum
    having?: AuditLeadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLeadCountAggregateInputType | true
    _min?: AuditLeadMinAggregateInputType
    _max?: AuditLeadMaxAggregateInputType
  }

  export type AuditLeadGroupByOutputType = {
    id: string
    sessionId: string
    fullName: string
    email: string
    phone: string | null
    companyName: string | null
    position: string | null
    createdAt: Date
    _count: AuditLeadCountAggregateOutputType | null
    _min: AuditLeadMinAggregateOutputType | null
    _max: AuditLeadMaxAggregateOutputType | null
  }

  type GetAuditLeadGroupByPayload<T extends AuditLeadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLeadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLeadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLeadGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLeadGroupByOutputType[P]>
        }
      >
    >


  export type AuditLeadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    companyName?: boolean
    position?: boolean
    createdAt?: boolean
    session?: boolean | AuditSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLead"]>

  export type AuditLeadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    companyName?: boolean
    position?: boolean
    createdAt?: boolean
    session?: boolean | AuditSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLead"]>

  export type AuditLeadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    companyName?: boolean
    position?: boolean
    createdAt?: boolean
    session?: boolean | AuditSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLead"]>

  export type AuditLeadSelectScalar = {
    id?: boolean
    sessionId?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    companyName?: boolean
    position?: boolean
    createdAt?: boolean
  }

  export type AuditLeadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "fullName" | "email" | "phone" | "companyName" | "position" | "createdAt", ExtArgs["result"]["auditLead"]>
  export type AuditLeadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | AuditSessionDefaultArgs<ExtArgs>
  }
  export type AuditLeadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | AuditSessionDefaultArgs<ExtArgs>
  }
  export type AuditLeadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | AuditSessionDefaultArgs<ExtArgs>
  }

  export type $AuditLeadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLead"
    objects: {
      session: Prisma.$AuditSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      fullName: string
      email: string
      phone: string | null
      companyName: string | null
      position: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLead"]>
    composites: {}
  }

  type AuditLeadGetPayload<S extends boolean | null | undefined | AuditLeadDefaultArgs> = $Result.GetResult<Prisma.$AuditLeadPayload, S>

  type AuditLeadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLeadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLeadCountAggregateInputType | true
    }

  export interface AuditLeadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLead'], meta: { name: 'AuditLead' } }
    /**
     * Find zero or one AuditLead that matches the filter.
     * @param {AuditLeadFindUniqueArgs} args - Arguments to find a AuditLead
     * @example
     * // Get one AuditLead
     * const auditLead = await prisma.auditLead.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLeadFindUniqueArgs>(args: SelectSubset<T, AuditLeadFindUniqueArgs<ExtArgs>>): Prisma__AuditLeadClient<$Result.GetResult<Prisma.$AuditLeadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLead that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLeadFindUniqueOrThrowArgs} args - Arguments to find a AuditLead
     * @example
     * // Get one AuditLead
     * const auditLead = await prisma.auditLead.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLeadFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLeadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLeadClient<$Result.GetResult<Prisma.$AuditLeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLead that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLeadFindFirstArgs} args - Arguments to find a AuditLead
     * @example
     * // Get one AuditLead
     * const auditLead = await prisma.auditLead.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLeadFindFirstArgs>(args?: SelectSubset<T, AuditLeadFindFirstArgs<ExtArgs>>): Prisma__AuditLeadClient<$Result.GetResult<Prisma.$AuditLeadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLead that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLeadFindFirstOrThrowArgs} args - Arguments to find a AuditLead
     * @example
     * // Get one AuditLead
     * const auditLead = await prisma.auditLead.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLeadFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLeadFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLeadClient<$Result.GetResult<Prisma.$AuditLeadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLeads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLeadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLeads
     * const auditLeads = await prisma.auditLead.findMany()
     * 
     * // Get first 10 AuditLeads
     * const auditLeads = await prisma.auditLead.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLeadWithIdOnly = await prisma.auditLead.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLeadFindManyArgs>(args?: SelectSubset<T, AuditLeadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLead.
     * @param {AuditLeadCreateArgs} args - Arguments to create a AuditLead.
     * @example
     * // Create one AuditLead
     * const AuditLead = await prisma.auditLead.create({
     *   data: {
     *     // ... data to create a AuditLead
     *   }
     * })
     * 
     */
    create<T extends AuditLeadCreateArgs>(args: SelectSubset<T, AuditLeadCreateArgs<ExtArgs>>): Prisma__AuditLeadClient<$Result.GetResult<Prisma.$AuditLeadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLeads.
     * @param {AuditLeadCreateManyArgs} args - Arguments to create many AuditLeads.
     * @example
     * // Create many AuditLeads
     * const auditLead = await prisma.auditLead.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLeadCreateManyArgs>(args?: SelectSubset<T, AuditLeadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLeads and returns the data saved in the database.
     * @param {AuditLeadCreateManyAndReturnArgs} args - Arguments to create many AuditLeads.
     * @example
     * // Create many AuditLeads
     * const auditLead = await prisma.auditLead.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLeads and only return the `id`
     * const auditLeadWithIdOnly = await prisma.auditLead.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLeadCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLeadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLeadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLead.
     * @param {AuditLeadDeleteArgs} args - Arguments to delete one AuditLead.
     * @example
     * // Delete one AuditLead
     * const AuditLead = await prisma.auditLead.delete({
     *   where: {
     *     // ... filter to delete one AuditLead
     *   }
     * })
     * 
     */
    delete<T extends AuditLeadDeleteArgs>(args: SelectSubset<T, AuditLeadDeleteArgs<ExtArgs>>): Prisma__AuditLeadClient<$Result.GetResult<Prisma.$AuditLeadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLead.
     * @param {AuditLeadUpdateArgs} args - Arguments to update one AuditLead.
     * @example
     * // Update one AuditLead
     * const auditLead = await prisma.auditLead.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLeadUpdateArgs>(args: SelectSubset<T, AuditLeadUpdateArgs<ExtArgs>>): Prisma__AuditLeadClient<$Result.GetResult<Prisma.$AuditLeadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLeads.
     * @param {AuditLeadDeleteManyArgs} args - Arguments to filter AuditLeads to delete.
     * @example
     * // Delete a few AuditLeads
     * const { count } = await prisma.auditLead.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLeadDeleteManyArgs>(args?: SelectSubset<T, AuditLeadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLeads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLeadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLeads
     * const auditLead = await prisma.auditLead.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLeadUpdateManyArgs>(args: SelectSubset<T, AuditLeadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLeads and returns the data updated in the database.
     * @param {AuditLeadUpdateManyAndReturnArgs} args - Arguments to update many AuditLeads.
     * @example
     * // Update many AuditLeads
     * const auditLead = await prisma.auditLead.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLeads and only return the `id`
     * const auditLeadWithIdOnly = await prisma.auditLead.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLeadUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLeadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLeadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLead.
     * @param {AuditLeadUpsertArgs} args - Arguments to update or create a AuditLead.
     * @example
     * // Update or create a AuditLead
     * const auditLead = await prisma.auditLead.upsert({
     *   create: {
     *     // ... data to create a AuditLead
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLead we want to update
     *   }
     * })
     */
    upsert<T extends AuditLeadUpsertArgs>(args: SelectSubset<T, AuditLeadUpsertArgs<ExtArgs>>): Prisma__AuditLeadClient<$Result.GetResult<Prisma.$AuditLeadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLeads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLeadCountArgs} args - Arguments to filter AuditLeads to count.
     * @example
     * // Count the number of AuditLeads
     * const count = await prisma.auditLead.count({
     *   where: {
     *     // ... the filter for the AuditLeads we want to count
     *   }
     * })
    **/
    count<T extends AuditLeadCountArgs>(
      args?: Subset<T, AuditLeadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLeadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLeadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLeadAggregateArgs>(args: Subset<T, AuditLeadAggregateArgs>): Prisma.PrismaPromise<GetAuditLeadAggregateType<T>>

    /**
     * Group by AuditLead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLeadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLeadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLeadGroupByArgs['orderBy'] }
        : { orderBy?: AuditLeadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLeadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLeadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLead model
   */
  readonly fields: AuditLeadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLead.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLeadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends AuditSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuditSessionDefaultArgs<ExtArgs>>): Prisma__AuditSessionClient<$Result.GetResult<Prisma.$AuditSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLead model
   */
  interface AuditLeadFieldRefs {
    readonly id: FieldRef<"AuditLead", 'String'>
    readonly sessionId: FieldRef<"AuditLead", 'String'>
    readonly fullName: FieldRef<"AuditLead", 'String'>
    readonly email: FieldRef<"AuditLead", 'String'>
    readonly phone: FieldRef<"AuditLead", 'String'>
    readonly companyName: FieldRef<"AuditLead", 'String'>
    readonly position: FieldRef<"AuditLead", 'String'>
    readonly createdAt: FieldRef<"AuditLead", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLead findUnique
   */
  export type AuditLeadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLead
     */
    select?: AuditLeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLead
     */
    omit?: AuditLeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLeadInclude<ExtArgs> | null
    /**
     * Filter, which AuditLead to fetch.
     */
    where: AuditLeadWhereUniqueInput
  }

  /**
   * AuditLead findUniqueOrThrow
   */
  export type AuditLeadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLead
     */
    select?: AuditLeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLead
     */
    omit?: AuditLeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLeadInclude<ExtArgs> | null
    /**
     * Filter, which AuditLead to fetch.
     */
    where: AuditLeadWhereUniqueInput
  }

  /**
   * AuditLead findFirst
   */
  export type AuditLeadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLead
     */
    select?: AuditLeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLead
     */
    omit?: AuditLeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLeadInclude<ExtArgs> | null
    /**
     * Filter, which AuditLead to fetch.
     */
    where?: AuditLeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLeads to fetch.
     */
    orderBy?: AuditLeadOrderByWithRelationInput | AuditLeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLeads.
     */
    cursor?: AuditLeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLeads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLeads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLeads.
     */
    distinct?: AuditLeadScalarFieldEnum | AuditLeadScalarFieldEnum[]
  }

  /**
   * AuditLead findFirstOrThrow
   */
  export type AuditLeadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLead
     */
    select?: AuditLeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLead
     */
    omit?: AuditLeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLeadInclude<ExtArgs> | null
    /**
     * Filter, which AuditLead to fetch.
     */
    where?: AuditLeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLeads to fetch.
     */
    orderBy?: AuditLeadOrderByWithRelationInput | AuditLeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLeads.
     */
    cursor?: AuditLeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLeads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLeads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLeads.
     */
    distinct?: AuditLeadScalarFieldEnum | AuditLeadScalarFieldEnum[]
  }

  /**
   * AuditLead findMany
   */
  export type AuditLeadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLead
     */
    select?: AuditLeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLead
     */
    omit?: AuditLeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLeadInclude<ExtArgs> | null
    /**
     * Filter, which AuditLeads to fetch.
     */
    where?: AuditLeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLeads to fetch.
     */
    orderBy?: AuditLeadOrderByWithRelationInput | AuditLeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLeads.
     */
    cursor?: AuditLeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLeads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLeads.
     */
    skip?: number
    distinct?: AuditLeadScalarFieldEnum | AuditLeadScalarFieldEnum[]
  }

  /**
   * AuditLead create
   */
  export type AuditLeadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLead
     */
    select?: AuditLeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLead
     */
    omit?: AuditLeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLeadInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLead.
     */
    data: XOR<AuditLeadCreateInput, AuditLeadUncheckedCreateInput>
  }

  /**
   * AuditLead createMany
   */
  export type AuditLeadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLeads.
     */
    data: AuditLeadCreateManyInput | AuditLeadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLead createManyAndReturn
   */
  export type AuditLeadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLead
     */
    select?: AuditLeadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLead
     */
    omit?: AuditLeadOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLeads.
     */
    data: AuditLeadCreateManyInput | AuditLeadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLeadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLead update
   */
  export type AuditLeadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLead
     */
    select?: AuditLeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLead
     */
    omit?: AuditLeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLeadInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLead.
     */
    data: XOR<AuditLeadUpdateInput, AuditLeadUncheckedUpdateInput>
    /**
     * Choose, which AuditLead to update.
     */
    where: AuditLeadWhereUniqueInput
  }

  /**
   * AuditLead updateMany
   */
  export type AuditLeadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLeads.
     */
    data: XOR<AuditLeadUpdateManyMutationInput, AuditLeadUncheckedUpdateManyInput>
    /**
     * Filter which AuditLeads to update
     */
    where?: AuditLeadWhereInput
    /**
     * Limit how many AuditLeads to update.
     */
    limit?: number
  }

  /**
   * AuditLead updateManyAndReturn
   */
  export type AuditLeadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLead
     */
    select?: AuditLeadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLead
     */
    omit?: AuditLeadOmit<ExtArgs> | null
    /**
     * The data used to update AuditLeads.
     */
    data: XOR<AuditLeadUpdateManyMutationInput, AuditLeadUncheckedUpdateManyInput>
    /**
     * Filter which AuditLeads to update
     */
    where?: AuditLeadWhereInput
    /**
     * Limit how many AuditLeads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLeadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLead upsert
   */
  export type AuditLeadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLead
     */
    select?: AuditLeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLead
     */
    omit?: AuditLeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLeadInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLead to update in case it exists.
     */
    where: AuditLeadWhereUniqueInput
    /**
     * In case the AuditLead found by the `where` argument doesn't exist, create a new AuditLead with this data.
     */
    create: XOR<AuditLeadCreateInput, AuditLeadUncheckedCreateInput>
    /**
     * In case the AuditLead was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLeadUpdateInput, AuditLeadUncheckedUpdateInput>
  }

  /**
   * AuditLead delete
   */
  export type AuditLeadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLead
     */
    select?: AuditLeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLead
     */
    omit?: AuditLeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLeadInclude<ExtArgs> | null
    /**
     * Filter which AuditLead to delete.
     */
    where: AuditLeadWhereUniqueInput
  }

  /**
   * AuditLead deleteMany
   */
  export type AuditLeadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLeads to delete
     */
    where?: AuditLeadWhereInput
    /**
     * Limit how many AuditLeads to delete.
     */
    limit?: number
  }

  /**
   * AuditLead without action
   */
  export type AuditLeadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLead
     */
    select?: AuditLeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLead
     */
    omit?: AuditLeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLeadInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AuditTemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    version: 'version',
    isActive: 'isActive',
    maxScore: 'maxScore',
    createdAt: 'createdAt'
  };

  export type AuditTemplateScalarFieldEnum = (typeof AuditTemplateScalarFieldEnum)[keyof typeof AuditTemplateScalarFieldEnum]


  export const AuditSectionScalarFieldEnum: {
    id: 'id',
    templateId: 'templateId',
    code: 'code',
    title: 'title',
    sortOrder: 'sortOrder',
    maxScore: 'maxScore',
    createdAt: 'createdAt'
  };

  export type AuditSectionScalarFieldEnum = (typeof AuditSectionScalarFieldEnum)[keyof typeof AuditSectionScalarFieldEnum]


  export const AuditQuestionScalarFieldEnum: {
    id: 'id',
    sectionId: 'sectionId',
    code: 'code',
    text: 'text',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt'
  };

  export type AuditQuestionScalarFieldEnum = (typeof AuditQuestionScalarFieldEnum)[keyof typeof AuditQuestionScalarFieldEnum]


  export const AuditOptionScalarFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    label: 'label',
    points: 'points',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt'
  };

  export type AuditOptionScalarFieldEnum = (typeof AuditOptionScalarFieldEnum)[keyof typeof AuditOptionScalarFieldEnum]


  export const AuditSessionScalarFieldEnum: {
    id: 'id',
    templateId: 'templateId',
    status: 'status',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt'
  };

  export type AuditSessionScalarFieldEnum = (typeof AuditSessionScalarFieldEnum)[keyof typeof AuditSessionScalarFieldEnum]


  export const AuditAnswerScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    questionId: 'questionId',
    optionId: 'optionId',
    pointsAwarded: 'pointsAwarded',
    answeredAt: 'answeredAt'
  };

  export type AuditAnswerScalarFieldEnum = (typeof AuditAnswerScalarFieldEnum)[keyof typeof AuditAnswerScalarFieldEnum]


  export const AuditResultScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    totalScore: 'totalScore',
    maxScore: 'maxScore',
    tier: 'tier',
    message: 'message',
    sectionScores: 'sectionScores',
    locked: 'locked',
    calculatedAt: 'calculatedAt'
  };

  export type AuditResultScalarFieldEnum = (typeof AuditResultScalarFieldEnum)[keyof typeof AuditResultScalarFieldEnum]


  export const AuditLeadScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    fullName: 'fullName',
    email: 'email',
    phone: 'phone',
    companyName: 'companyName',
    position: 'position',
    createdAt: 'createdAt'
  };

  export type AuditLeadScalarFieldEnum = (typeof AuditLeadScalarFieldEnum)[keyof typeof AuditLeadScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'SessionStatus'
   */
  export type EnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus'>
    


  /**
   * Reference to a field of type 'SessionStatus[]'
   */
  export type ListEnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AuditTemplateWhereInput = {
    AND?: AuditTemplateWhereInput | AuditTemplateWhereInput[]
    OR?: AuditTemplateWhereInput[]
    NOT?: AuditTemplateWhereInput | AuditTemplateWhereInput[]
    id?: StringFilter<"AuditTemplate"> | string
    name?: StringFilter<"AuditTemplate"> | string
    version?: IntFilter<"AuditTemplate"> | number
    isActive?: BoolFilter<"AuditTemplate"> | boolean
    maxScore?: IntFilter<"AuditTemplate"> | number
    createdAt?: DateTimeFilter<"AuditTemplate"> | Date | string
    sections?: AuditSectionListRelationFilter
    sessions?: AuditSessionListRelationFilter
  }

  export type AuditTemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    isActive?: SortOrder
    maxScore?: SortOrder
    createdAt?: SortOrder
    sections?: AuditSectionOrderByRelationAggregateInput
    sessions?: AuditSessionOrderByRelationAggregateInput
  }

  export type AuditTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    version?: number
    AND?: AuditTemplateWhereInput | AuditTemplateWhereInput[]
    OR?: AuditTemplateWhereInput[]
    NOT?: AuditTemplateWhereInput | AuditTemplateWhereInput[]
    name?: StringFilter<"AuditTemplate"> | string
    isActive?: BoolFilter<"AuditTemplate"> | boolean
    maxScore?: IntFilter<"AuditTemplate"> | number
    createdAt?: DateTimeFilter<"AuditTemplate"> | Date | string
    sections?: AuditSectionListRelationFilter
    sessions?: AuditSessionListRelationFilter
  }, "id" | "version">

  export type AuditTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    isActive?: SortOrder
    maxScore?: SortOrder
    createdAt?: SortOrder
    _count?: AuditTemplateCountOrderByAggregateInput
    _avg?: AuditTemplateAvgOrderByAggregateInput
    _max?: AuditTemplateMaxOrderByAggregateInput
    _min?: AuditTemplateMinOrderByAggregateInput
    _sum?: AuditTemplateSumOrderByAggregateInput
  }

  export type AuditTemplateScalarWhereWithAggregatesInput = {
    AND?: AuditTemplateScalarWhereWithAggregatesInput | AuditTemplateScalarWhereWithAggregatesInput[]
    OR?: AuditTemplateScalarWhereWithAggregatesInput[]
    NOT?: AuditTemplateScalarWhereWithAggregatesInput | AuditTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditTemplate"> | string
    name?: StringWithAggregatesFilter<"AuditTemplate"> | string
    version?: IntWithAggregatesFilter<"AuditTemplate"> | number
    isActive?: BoolWithAggregatesFilter<"AuditTemplate"> | boolean
    maxScore?: IntWithAggregatesFilter<"AuditTemplate"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AuditTemplate"> | Date | string
  }

  export type AuditSectionWhereInput = {
    AND?: AuditSectionWhereInput | AuditSectionWhereInput[]
    OR?: AuditSectionWhereInput[]
    NOT?: AuditSectionWhereInput | AuditSectionWhereInput[]
    id?: StringFilter<"AuditSection"> | string
    templateId?: StringFilter<"AuditSection"> | string
    code?: StringFilter<"AuditSection"> | string
    title?: StringFilter<"AuditSection"> | string
    sortOrder?: IntFilter<"AuditSection"> | number
    maxScore?: IntFilter<"AuditSection"> | number
    createdAt?: DateTimeFilter<"AuditSection"> | Date | string
    template?: XOR<AuditTemplateScalarRelationFilter, AuditTemplateWhereInput>
    questions?: AuditQuestionListRelationFilter
  }

  export type AuditSectionOrderByWithRelationInput = {
    id?: SortOrder
    templateId?: SortOrder
    code?: SortOrder
    title?: SortOrder
    sortOrder?: SortOrder
    maxScore?: SortOrder
    createdAt?: SortOrder
    template?: AuditTemplateOrderByWithRelationInput
    questions?: AuditQuestionOrderByRelationAggregateInput
  }

  export type AuditSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    templateId_code?: AuditSectionTemplateIdCodeCompoundUniqueInput
    AND?: AuditSectionWhereInput | AuditSectionWhereInput[]
    OR?: AuditSectionWhereInput[]
    NOT?: AuditSectionWhereInput | AuditSectionWhereInput[]
    templateId?: StringFilter<"AuditSection"> | string
    code?: StringFilter<"AuditSection"> | string
    title?: StringFilter<"AuditSection"> | string
    sortOrder?: IntFilter<"AuditSection"> | number
    maxScore?: IntFilter<"AuditSection"> | number
    createdAt?: DateTimeFilter<"AuditSection"> | Date | string
    template?: XOR<AuditTemplateScalarRelationFilter, AuditTemplateWhereInput>
    questions?: AuditQuestionListRelationFilter
  }, "id" | "templateId_code">

  export type AuditSectionOrderByWithAggregationInput = {
    id?: SortOrder
    templateId?: SortOrder
    code?: SortOrder
    title?: SortOrder
    sortOrder?: SortOrder
    maxScore?: SortOrder
    createdAt?: SortOrder
    _count?: AuditSectionCountOrderByAggregateInput
    _avg?: AuditSectionAvgOrderByAggregateInput
    _max?: AuditSectionMaxOrderByAggregateInput
    _min?: AuditSectionMinOrderByAggregateInput
    _sum?: AuditSectionSumOrderByAggregateInput
  }

  export type AuditSectionScalarWhereWithAggregatesInput = {
    AND?: AuditSectionScalarWhereWithAggregatesInput | AuditSectionScalarWhereWithAggregatesInput[]
    OR?: AuditSectionScalarWhereWithAggregatesInput[]
    NOT?: AuditSectionScalarWhereWithAggregatesInput | AuditSectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditSection"> | string
    templateId?: StringWithAggregatesFilter<"AuditSection"> | string
    code?: StringWithAggregatesFilter<"AuditSection"> | string
    title?: StringWithAggregatesFilter<"AuditSection"> | string
    sortOrder?: IntWithAggregatesFilter<"AuditSection"> | number
    maxScore?: IntWithAggregatesFilter<"AuditSection"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AuditSection"> | Date | string
  }

  export type AuditQuestionWhereInput = {
    AND?: AuditQuestionWhereInput | AuditQuestionWhereInput[]
    OR?: AuditQuestionWhereInput[]
    NOT?: AuditQuestionWhereInput | AuditQuestionWhereInput[]
    id?: StringFilter<"AuditQuestion"> | string
    sectionId?: StringFilter<"AuditQuestion"> | string
    code?: StringFilter<"AuditQuestion"> | string
    text?: StringFilter<"AuditQuestion"> | string
    sortOrder?: IntFilter<"AuditQuestion"> | number
    createdAt?: DateTimeFilter<"AuditQuestion"> | Date | string
    section?: XOR<AuditSectionScalarRelationFilter, AuditSectionWhereInput>
    options?: AuditOptionListRelationFilter
    answers?: AuditAnswerListRelationFilter
  }

  export type AuditQuestionOrderByWithRelationInput = {
    id?: SortOrder
    sectionId?: SortOrder
    code?: SortOrder
    text?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    section?: AuditSectionOrderByWithRelationInput
    options?: AuditOptionOrderByRelationAggregateInput
    answers?: AuditAnswerOrderByRelationAggregateInput
  }

  export type AuditQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sectionId_code?: AuditQuestionSectionIdCodeCompoundUniqueInput
    AND?: AuditQuestionWhereInput | AuditQuestionWhereInput[]
    OR?: AuditQuestionWhereInput[]
    NOT?: AuditQuestionWhereInput | AuditQuestionWhereInput[]
    sectionId?: StringFilter<"AuditQuestion"> | string
    code?: StringFilter<"AuditQuestion"> | string
    text?: StringFilter<"AuditQuestion"> | string
    sortOrder?: IntFilter<"AuditQuestion"> | number
    createdAt?: DateTimeFilter<"AuditQuestion"> | Date | string
    section?: XOR<AuditSectionScalarRelationFilter, AuditSectionWhereInput>
    options?: AuditOptionListRelationFilter
    answers?: AuditAnswerListRelationFilter
  }, "id" | "sectionId_code">

  export type AuditQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    sectionId?: SortOrder
    code?: SortOrder
    text?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    _count?: AuditQuestionCountOrderByAggregateInput
    _avg?: AuditQuestionAvgOrderByAggregateInput
    _max?: AuditQuestionMaxOrderByAggregateInput
    _min?: AuditQuestionMinOrderByAggregateInput
    _sum?: AuditQuestionSumOrderByAggregateInput
  }

  export type AuditQuestionScalarWhereWithAggregatesInput = {
    AND?: AuditQuestionScalarWhereWithAggregatesInput | AuditQuestionScalarWhereWithAggregatesInput[]
    OR?: AuditQuestionScalarWhereWithAggregatesInput[]
    NOT?: AuditQuestionScalarWhereWithAggregatesInput | AuditQuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditQuestion"> | string
    sectionId?: StringWithAggregatesFilter<"AuditQuestion"> | string
    code?: StringWithAggregatesFilter<"AuditQuestion"> | string
    text?: StringWithAggregatesFilter<"AuditQuestion"> | string
    sortOrder?: IntWithAggregatesFilter<"AuditQuestion"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AuditQuestion"> | Date | string
  }

  export type AuditOptionWhereInput = {
    AND?: AuditOptionWhereInput | AuditOptionWhereInput[]
    OR?: AuditOptionWhereInput[]
    NOT?: AuditOptionWhereInput | AuditOptionWhereInput[]
    id?: StringFilter<"AuditOption"> | string
    questionId?: StringFilter<"AuditOption"> | string
    label?: StringFilter<"AuditOption"> | string
    points?: IntFilter<"AuditOption"> | number
    sortOrder?: IntFilter<"AuditOption"> | number
    createdAt?: DateTimeFilter<"AuditOption"> | Date | string
    question?: XOR<AuditQuestionScalarRelationFilter, AuditQuestionWhereInput>
    answers?: AuditAnswerListRelationFilter
  }

  export type AuditOptionOrderByWithRelationInput = {
    id?: SortOrder
    questionId?: SortOrder
    label?: SortOrder
    points?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    question?: AuditQuestionOrderByWithRelationInput
    answers?: AuditAnswerOrderByRelationAggregateInput
  }

  export type AuditOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditOptionWhereInput | AuditOptionWhereInput[]
    OR?: AuditOptionWhereInput[]
    NOT?: AuditOptionWhereInput | AuditOptionWhereInput[]
    questionId?: StringFilter<"AuditOption"> | string
    label?: StringFilter<"AuditOption"> | string
    points?: IntFilter<"AuditOption"> | number
    sortOrder?: IntFilter<"AuditOption"> | number
    createdAt?: DateTimeFilter<"AuditOption"> | Date | string
    question?: XOR<AuditQuestionScalarRelationFilter, AuditQuestionWhereInput>
    answers?: AuditAnswerListRelationFilter
  }, "id">

  export type AuditOptionOrderByWithAggregationInput = {
    id?: SortOrder
    questionId?: SortOrder
    label?: SortOrder
    points?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    _count?: AuditOptionCountOrderByAggregateInput
    _avg?: AuditOptionAvgOrderByAggregateInput
    _max?: AuditOptionMaxOrderByAggregateInput
    _min?: AuditOptionMinOrderByAggregateInput
    _sum?: AuditOptionSumOrderByAggregateInput
  }

  export type AuditOptionScalarWhereWithAggregatesInput = {
    AND?: AuditOptionScalarWhereWithAggregatesInput | AuditOptionScalarWhereWithAggregatesInput[]
    OR?: AuditOptionScalarWhereWithAggregatesInput[]
    NOT?: AuditOptionScalarWhereWithAggregatesInput | AuditOptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditOption"> | string
    questionId?: StringWithAggregatesFilter<"AuditOption"> | string
    label?: StringWithAggregatesFilter<"AuditOption"> | string
    points?: IntWithAggregatesFilter<"AuditOption"> | number
    sortOrder?: IntWithAggregatesFilter<"AuditOption"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AuditOption"> | Date | string
  }

  export type AuditSessionWhereInput = {
    AND?: AuditSessionWhereInput | AuditSessionWhereInput[]
    OR?: AuditSessionWhereInput[]
    NOT?: AuditSessionWhereInput | AuditSessionWhereInput[]
    id?: StringFilter<"AuditSession"> | string
    templateId?: StringFilter<"AuditSession"> | string
    status?: EnumSessionStatusFilter<"AuditSession"> | $Enums.SessionStatus
    startedAt?: DateTimeFilter<"AuditSession"> | Date | string
    completedAt?: DateTimeNullableFilter<"AuditSession"> | Date | string | null
    createdAt?: DateTimeFilter<"AuditSession"> | Date | string
    template?: XOR<AuditTemplateScalarRelationFilter, AuditTemplateWhereInput>
    answers?: AuditAnswerListRelationFilter
    result?: XOR<AuditResultNullableScalarRelationFilter, AuditResultWhereInput> | null
    lead?: XOR<AuditLeadNullableScalarRelationFilter, AuditLeadWhereInput> | null
  }

  export type AuditSessionOrderByWithRelationInput = {
    id?: SortOrder
    templateId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    template?: AuditTemplateOrderByWithRelationInput
    answers?: AuditAnswerOrderByRelationAggregateInput
    result?: AuditResultOrderByWithRelationInput
    lead?: AuditLeadOrderByWithRelationInput
  }

  export type AuditSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditSessionWhereInput | AuditSessionWhereInput[]
    OR?: AuditSessionWhereInput[]
    NOT?: AuditSessionWhereInput | AuditSessionWhereInput[]
    templateId?: StringFilter<"AuditSession"> | string
    status?: EnumSessionStatusFilter<"AuditSession"> | $Enums.SessionStatus
    startedAt?: DateTimeFilter<"AuditSession"> | Date | string
    completedAt?: DateTimeNullableFilter<"AuditSession"> | Date | string | null
    createdAt?: DateTimeFilter<"AuditSession"> | Date | string
    template?: XOR<AuditTemplateScalarRelationFilter, AuditTemplateWhereInput>
    answers?: AuditAnswerListRelationFilter
    result?: XOR<AuditResultNullableScalarRelationFilter, AuditResultWhereInput> | null
    lead?: XOR<AuditLeadNullableScalarRelationFilter, AuditLeadWhereInput> | null
  }, "id">

  export type AuditSessionOrderByWithAggregationInput = {
    id?: SortOrder
    templateId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditSessionCountOrderByAggregateInput
    _max?: AuditSessionMaxOrderByAggregateInput
    _min?: AuditSessionMinOrderByAggregateInput
  }

  export type AuditSessionScalarWhereWithAggregatesInput = {
    AND?: AuditSessionScalarWhereWithAggregatesInput | AuditSessionScalarWhereWithAggregatesInput[]
    OR?: AuditSessionScalarWhereWithAggregatesInput[]
    NOT?: AuditSessionScalarWhereWithAggregatesInput | AuditSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditSession"> | string
    templateId?: StringWithAggregatesFilter<"AuditSession"> | string
    status?: EnumSessionStatusWithAggregatesFilter<"AuditSession"> | $Enums.SessionStatus
    startedAt?: DateTimeWithAggregatesFilter<"AuditSession"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"AuditSession"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditSession"> | Date | string
  }

  export type AuditAnswerWhereInput = {
    AND?: AuditAnswerWhereInput | AuditAnswerWhereInput[]
    OR?: AuditAnswerWhereInput[]
    NOT?: AuditAnswerWhereInput | AuditAnswerWhereInput[]
    id?: StringFilter<"AuditAnswer"> | string
    sessionId?: StringFilter<"AuditAnswer"> | string
    questionId?: StringFilter<"AuditAnswer"> | string
    optionId?: StringFilter<"AuditAnswer"> | string
    pointsAwarded?: IntFilter<"AuditAnswer"> | number
    answeredAt?: DateTimeFilter<"AuditAnswer"> | Date | string
    session?: XOR<AuditSessionScalarRelationFilter, AuditSessionWhereInput>
    question?: XOR<AuditQuestionScalarRelationFilter, AuditQuestionWhereInput>
    option?: XOR<AuditOptionScalarRelationFilter, AuditOptionWhereInput>
  }

  export type AuditAnswerOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    questionId?: SortOrder
    optionId?: SortOrder
    pointsAwarded?: SortOrder
    answeredAt?: SortOrder
    session?: AuditSessionOrderByWithRelationInput
    question?: AuditQuestionOrderByWithRelationInput
    option?: AuditOptionOrderByWithRelationInput
  }

  export type AuditAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionId_questionId?: AuditAnswerSessionIdQuestionIdCompoundUniqueInput
    AND?: AuditAnswerWhereInput | AuditAnswerWhereInput[]
    OR?: AuditAnswerWhereInput[]
    NOT?: AuditAnswerWhereInput | AuditAnswerWhereInput[]
    sessionId?: StringFilter<"AuditAnswer"> | string
    questionId?: StringFilter<"AuditAnswer"> | string
    optionId?: StringFilter<"AuditAnswer"> | string
    pointsAwarded?: IntFilter<"AuditAnswer"> | number
    answeredAt?: DateTimeFilter<"AuditAnswer"> | Date | string
    session?: XOR<AuditSessionScalarRelationFilter, AuditSessionWhereInput>
    question?: XOR<AuditQuestionScalarRelationFilter, AuditQuestionWhereInput>
    option?: XOR<AuditOptionScalarRelationFilter, AuditOptionWhereInput>
  }, "id" | "sessionId_questionId">

  export type AuditAnswerOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    questionId?: SortOrder
    optionId?: SortOrder
    pointsAwarded?: SortOrder
    answeredAt?: SortOrder
    _count?: AuditAnswerCountOrderByAggregateInput
    _avg?: AuditAnswerAvgOrderByAggregateInput
    _max?: AuditAnswerMaxOrderByAggregateInput
    _min?: AuditAnswerMinOrderByAggregateInput
    _sum?: AuditAnswerSumOrderByAggregateInput
  }

  export type AuditAnswerScalarWhereWithAggregatesInput = {
    AND?: AuditAnswerScalarWhereWithAggregatesInput | AuditAnswerScalarWhereWithAggregatesInput[]
    OR?: AuditAnswerScalarWhereWithAggregatesInput[]
    NOT?: AuditAnswerScalarWhereWithAggregatesInput | AuditAnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditAnswer"> | string
    sessionId?: StringWithAggregatesFilter<"AuditAnswer"> | string
    questionId?: StringWithAggregatesFilter<"AuditAnswer"> | string
    optionId?: StringWithAggregatesFilter<"AuditAnswer"> | string
    pointsAwarded?: IntWithAggregatesFilter<"AuditAnswer"> | number
    answeredAt?: DateTimeWithAggregatesFilter<"AuditAnswer"> | Date | string
  }

  export type AuditResultWhereInput = {
    AND?: AuditResultWhereInput | AuditResultWhereInput[]
    OR?: AuditResultWhereInput[]
    NOT?: AuditResultWhereInput | AuditResultWhereInput[]
    id?: StringFilter<"AuditResult"> | string
    sessionId?: StringFilter<"AuditResult"> | string
    totalScore?: IntFilter<"AuditResult"> | number
    maxScore?: IntFilter<"AuditResult"> | number
    tier?: StringFilter<"AuditResult"> | string
    message?: StringFilter<"AuditResult"> | string
    sectionScores?: JsonFilter<"AuditResult">
    locked?: BoolFilter<"AuditResult"> | boolean
    calculatedAt?: DateTimeFilter<"AuditResult"> | Date | string
    session?: XOR<AuditSessionScalarRelationFilter, AuditSessionWhereInput>
  }

  export type AuditResultOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    totalScore?: SortOrder
    maxScore?: SortOrder
    tier?: SortOrder
    message?: SortOrder
    sectionScores?: SortOrder
    locked?: SortOrder
    calculatedAt?: SortOrder
    session?: AuditSessionOrderByWithRelationInput
  }

  export type AuditResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionId?: string
    AND?: AuditResultWhereInput | AuditResultWhereInput[]
    OR?: AuditResultWhereInput[]
    NOT?: AuditResultWhereInput | AuditResultWhereInput[]
    totalScore?: IntFilter<"AuditResult"> | number
    maxScore?: IntFilter<"AuditResult"> | number
    tier?: StringFilter<"AuditResult"> | string
    message?: StringFilter<"AuditResult"> | string
    sectionScores?: JsonFilter<"AuditResult">
    locked?: BoolFilter<"AuditResult"> | boolean
    calculatedAt?: DateTimeFilter<"AuditResult"> | Date | string
    session?: XOR<AuditSessionScalarRelationFilter, AuditSessionWhereInput>
  }, "id" | "sessionId">

  export type AuditResultOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    totalScore?: SortOrder
    maxScore?: SortOrder
    tier?: SortOrder
    message?: SortOrder
    sectionScores?: SortOrder
    locked?: SortOrder
    calculatedAt?: SortOrder
    _count?: AuditResultCountOrderByAggregateInput
    _avg?: AuditResultAvgOrderByAggregateInput
    _max?: AuditResultMaxOrderByAggregateInput
    _min?: AuditResultMinOrderByAggregateInput
    _sum?: AuditResultSumOrderByAggregateInput
  }

  export type AuditResultScalarWhereWithAggregatesInput = {
    AND?: AuditResultScalarWhereWithAggregatesInput | AuditResultScalarWhereWithAggregatesInput[]
    OR?: AuditResultScalarWhereWithAggregatesInput[]
    NOT?: AuditResultScalarWhereWithAggregatesInput | AuditResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditResult"> | string
    sessionId?: StringWithAggregatesFilter<"AuditResult"> | string
    totalScore?: IntWithAggregatesFilter<"AuditResult"> | number
    maxScore?: IntWithAggregatesFilter<"AuditResult"> | number
    tier?: StringWithAggregatesFilter<"AuditResult"> | string
    message?: StringWithAggregatesFilter<"AuditResult"> | string
    sectionScores?: JsonWithAggregatesFilter<"AuditResult">
    locked?: BoolWithAggregatesFilter<"AuditResult"> | boolean
    calculatedAt?: DateTimeWithAggregatesFilter<"AuditResult"> | Date | string
  }

  export type AuditLeadWhereInput = {
    AND?: AuditLeadWhereInput | AuditLeadWhereInput[]
    OR?: AuditLeadWhereInput[]
    NOT?: AuditLeadWhereInput | AuditLeadWhereInput[]
    id?: StringFilter<"AuditLead"> | string
    sessionId?: StringFilter<"AuditLead"> | string
    fullName?: StringFilter<"AuditLead"> | string
    email?: StringFilter<"AuditLead"> | string
    phone?: StringNullableFilter<"AuditLead"> | string | null
    companyName?: StringNullableFilter<"AuditLead"> | string | null
    position?: StringNullableFilter<"AuditLead"> | string | null
    createdAt?: DateTimeFilter<"AuditLead"> | Date | string
    session?: XOR<AuditSessionScalarRelationFilter, AuditSessionWhereInput>
  }

  export type AuditLeadOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    session?: AuditSessionOrderByWithRelationInput
  }

  export type AuditLeadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionId?: string
    AND?: AuditLeadWhereInput | AuditLeadWhereInput[]
    OR?: AuditLeadWhereInput[]
    NOT?: AuditLeadWhereInput | AuditLeadWhereInput[]
    fullName?: StringFilter<"AuditLead"> | string
    email?: StringFilter<"AuditLead"> | string
    phone?: StringNullableFilter<"AuditLead"> | string | null
    companyName?: StringNullableFilter<"AuditLead"> | string | null
    position?: StringNullableFilter<"AuditLead"> | string | null
    createdAt?: DateTimeFilter<"AuditLead"> | Date | string
    session?: XOR<AuditSessionScalarRelationFilter, AuditSessionWhereInput>
  }, "id" | "sessionId">

  export type AuditLeadOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLeadCountOrderByAggregateInput
    _max?: AuditLeadMaxOrderByAggregateInput
    _min?: AuditLeadMinOrderByAggregateInput
  }

  export type AuditLeadScalarWhereWithAggregatesInput = {
    AND?: AuditLeadScalarWhereWithAggregatesInput | AuditLeadScalarWhereWithAggregatesInput[]
    OR?: AuditLeadScalarWhereWithAggregatesInput[]
    NOT?: AuditLeadScalarWhereWithAggregatesInput | AuditLeadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLead"> | string
    sessionId?: StringWithAggregatesFilter<"AuditLead"> | string
    fullName?: StringWithAggregatesFilter<"AuditLead"> | string
    email?: StringWithAggregatesFilter<"AuditLead"> | string
    phone?: StringNullableWithAggregatesFilter<"AuditLead"> | string | null
    companyName?: StringNullableWithAggregatesFilter<"AuditLead"> | string | null
    position?: StringNullableWithAggregatesFilter<"AuditLead"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLead"> | Date | string
  }

  export type AuditTemplateCreateInput = {
    id?: string
    name: string
    version: number
    isActive?: boolean
    maxScore: number
    createdAt?: Date | string
    sections?: AuditSectionCreateNestedManyWithoutTemplateInput
    sessions?: AuditSessionCreateNestedManyWithoutTemplateInput
  }

  export type AuditTemplateUncheckedCreateInput = {
    id?: string
    name: string
    version: number
    isActive?: boolean
    maxScore: number
    createdAt?: Date | string
    sections?: AuditSectionUncheckedCreateNestedManyWithoutTemplateInput
    sessions?: AuditSessionUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type AuditTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    maxScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: AuditSectionUpdateManyWithoutTemplateNestedInput
    sessions?: AuditSessionUpdateManyWithoutTemplateNestedInput
  }

  export type AuditTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    maxScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: AuditSectionUncheckedUpdateManyWithoutTemplateNestedInput
    sessions?: AuditSessionUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type AuditTemplateCreateManyInput = {
    id?: string
    name: string
    version: number
    isActive?: boolean
    maxScore: number
    createdAt?: Date | string
  }

  export type AuditTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    maxScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    maxScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditSectionCreateInput = {
    id?: string
    code: string
    title: string
    sortOrder: number
    maxScore: number
    createdAt?: Date | string
    template: AuditTemplateCreateNestedOneWithoutSectionsInput
    questions?: AuditQuestionCreateNestedManyWithoutSectionInput
  }

  export type AuditSectionUncheckedCreateInput = {
    id?: string
    templateId: string
    code: string
    title: string
    sortOrder: number
    maxScore: number
    createdAt?: Date | string
    questions?: AuditQuestionUncheckedCreateNestedManyWithoutSectionInput
  }

  export type AuditSectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: AuditTemplateUpdateOneRequiredWithoutSectionsNestedInput
    questions?: AuditQuestionUpdateManyWithoutSectionNestedInput
  }

  export type AuditSectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: AuditQuestionUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type AuditSectionCreateManyInput = {
    id?: string
    templateId: string
    code: string
    title: string
    sortOrder: number
    maxScore: number
    createdAt?: Date | string
  }

  export type AuditSectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditSectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditQuestionCreateInput = {
    id?: string
    code: string
    text: string
    sortOrder: number
    createdAt?: Date | string
    section: AuditSectionCreateNestedOneWithoutQuestionsInput
    options?: AuditOptionCreateNestedManyWithoutQuestionInput
    answers?: AuditAnswerCreateNestedManyWithoutQuestionInput
  }

  export type AuditQuestionUncheckedCreateInput = {
    id?: string
    sectionId: string
    code: string
    text: string
    sortOrder: number
    createdAt?: Date | string
    options?: AuditOptionUncheckedCreateNestedManyWithoutQuestionInput
    answers?: AuditAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type AuditQuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    section?: AuditSectionUpdateOneRequiredWithoutQuestionsNestedInput
    options?: AuditOptionUpdateManyWithoutQuestionNestedInput
    answers?: AuditAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type AuditQuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: AuditOptionUncheckedUpdateManyWithoutQuestionNestedInput
    answers?: AuditAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type AuditQuestionCreateManyInput = {
    id?: string
    sectionId: string
    code: string
    text: string
    sortOrder: number
    createdAt?: Date | string
  }

  export type AuditQuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditQuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditOptionCreateInput = {
    id?: string
    label: string
    points: number
    sortOrder: number
    createdAt?: Date | string
    question: AuditQuestionCreateNestedOneWithoutOptionsInput
    answers?: AuditAnswerCreateNestedManyWithoutOptionInput
  }

  export type AuditOptionUncheckedCreateInput = {
    id?: string
    questionId: string
    label: string
    points: number
    sortOrder: number
    createdAt?: Date | string
    answers?: AuditAnswerUncheckedCreateNestedManyWithoutOptionInput
  }

  export type AuditOptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: AuditQuestionUpdateOneRequiredWithoutOptionsNestedInput
    answers?: AuditAnswerUpdateManyWithoutOptionNestedInput
  }

  export type AuditOptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AuditAnswerUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type AuditOptionCreateManyInput = {
    id?: string
    questionId: string
    label: string
    points: number
    sortOrder: number
    createdAt?: Date | string
  }

  export type AuditOptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditOptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditSessionCreateInput = {
    id?: string
    status?: $Enums.SessionStatus
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    template: AuditTemplateCreateNestedOneWithoutSessionsInput
    answers?: AuditAnswerCreateNestedManyWithoutSessionInput
    result?: AuditResultCreateNestedOneWithoutSessionInput
    lead?: AuditLeadCreateNestedOneWithoutSessionInput
  }

  export type AuditSessionUncheckedCreateInput = {
    id?: string
    templateId: string
    status?: $Enums.SessionStatus
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    answers?: AuditAnswerUncheckedCreateNestedManyWithoutSessionInput
    result?: AuditResultUncheckedCreateNestedOneWithoutSessionInput
    lead?: AuditLeadUncheckedCreateNestedOneWithoutSessionInput
  }

  export type AuditSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: AuditTemplateUpdateOneRequiredWithoutSessionsNestedInput
    answers?: AuditAnswerUpdateManyWithoutSessionNestedInput
    result?: AuditResultUpdateOneWithoutSessionNestedInput
    lead?: AuditLeadUpdateOneWithoutSessionNestedInput
  }

  export type AuditSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AuditAnswerUncheckedUpdateManyWithoutSessionNestedInput
    result?: AuditResultUncheckedUpdateOneWithoutSessionNestedInput
    lead?: AuditLeadUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type AuditSessionCreateManyInput = {
    id?: string
    templateId: string
    status?: $Enums.SessionStatus
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type AuditSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditAnswerCreateInput = {
    id?: string
    pointsAwarded: number
    answeredAt?: Date | string
    session: AuditSessionCreateNestedOneWithoutAnswersInput
    question: AuditQuestionCreateNestedOneWithoutAnswersInput
    option: AuditOptionCreateNestedOneWithoutAnswersInput
  }

  export type AuditAnswerUncheckedCreateInput = {
    id?: string
    sessionId: string
    questionId: string
    optionId: string
    pointsAwarded: number
    answeredAt?: Date | string
  }

  export type AuditAnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: AuditSessionUpdateOneRequiredWithoutAnswersNestedInput
    question?: AuditQuestionUpdateOneRequiredWithoutAnswersNestedInput
    option?: AuditOptionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AuditAnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditAnswerCreateManyInput = {
    id?: string
    sessionId: string
    questionId: string
    optionId: string
    pointsAwarded: number
    answeredAt?: Date | string
  }

  export type AuditAnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditAnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditResultCreateInput = {
    id?: string
    totalScore: number
    maxScore: number
    tier: string
    message: string
    sectionScores: JsonNullValueInput | InputJsonValue
    locked?: boolean
    calculatedAt?: Date | string
    session: AuditSessionCreateNestedOneWithoutResultInput
  }

  export type AuditResultUncheckedCreateInput = {
    id?: string
    sessionId: string
    totalScore: number
    maxScore: number
    tier: string
    message: string
    sectionScores: JsonNullValueInput | InputJsonValue
    locked?: boolean
    calculatedAt?: Date | string
  }

  export type AuditResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalScore?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    tier?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sectionScores?: JsonNullValueInput | InputJsonValue
    locked?: BoolFieldUpdateOperationsInput | boolean
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: AuditSessionUpdateOneRequiredWithoutResultNestedInput
  }

  export type AuditResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    totalScore?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    tier?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sectionScores?: JsonNullValueInput | InputJsonValue
    locked?: BoolFieldUpdateOperationsInput | boolean
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditResultCreateManyInput = {
    id?: string
    sessionId: string
    totalScore: number
    maxScore: number
    tier: string
    message: string
    sectionScores: JsonNullValueInput | InputJsonValue
    locked?: boolean
    calculatedAt?: Date | string
  }

  export type AuditResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalScore?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    tier?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sectionScores?: JsonNullValueInput | InputJsonValue
    locked?: BoolFieldUpdateOperationsInput | boolean
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    totalScore?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    tier?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sectionScores?: JsonNullValueInput | InputJsonValue
    locked?: BoolFieldUpdateOperationsInput | boolean
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLeadCreateInput = {
    id?: string
    fullName: string
    email: string
    phone?: string | null
    companyName?: string | null
    position?: string | null
    createdAt?: Date | string
    session: AuditSessionCreateNestedOneWithoutLeadInput
  }

  export type AuditLeadUncheckedCreateInput = {
    id?: string
    sessionId: string
    fullName: string
    email: string
    phone?: string | null
    companyName?: string | null
    position?: string | null
    createdAt?: Date | string
  }

  export type AuditLeadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: AuditSessionUpdateOneRequiredWithoutLeadNestedInput
  }

  export type AuditLeadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLeadCreateManyInput = {
    id?: string
    sessionId: string
    fullName: string
    email: string
    phone?: string | null
    companyName?: string | null
    position?: string | null
    createdAt?: Date | string
  }

  export type AuditLeadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLeadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AuditSectionListRelationFilter = {
    every?: AuditSectionWhereInput
    some?: AuditSectionWhereInput
    none?: AuditSectionWhereInput
  }

  export type AuditSessionListRelationFilter = {
    every?: AuditSessionWhereInput
    some?: AuditSessionWhereInput
    none?: AuditSessionWhereInput
  }

  export type AuditSectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    isActive?: SortOrder
    maxScore?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditTemplateAvgOrderByAggregateInput = {
    version?: SortOrder
    maxScore?: SortOrder
  }

  export type AuditTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    isActive?: SortOrder
    maxScore?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    isActive?: SortOrder
    maxScore?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditTemplateSumOrderByAggregateInput = {
    version?: SortOrder
    maxScore?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AuditTemplateScalarRelationFilter = {
    is?: AuditTemplateWhereInput
    isNot?: AuditTemplateWhereInput
  }

  export type AuditQuestionListRelationFilter = {
    every?: AuditQuestionWhereInput
    some?: AuditQuestionWhereInput
    none?: AuditQuestionWhereInput
  }

  export type AuditQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditSectionTemplateIdCodeCompoundUniqueInput = {
    templateId: string
    code: string
  }

  export type AuditSectionCountOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    code?: SortOrder
    title?: SortOrder
    sortOrder?: SortOrder
    maxScore?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditSectionAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
    maxScore?: SortOrder
  }

  export type AuditSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    code?: SortOrder
    title?: SortOrder
    sortOrder?: SortOrder
    maxScore?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditSectionMinOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    code?: SortOrder
    title?: SortOrder
    sortOrder?: SortOrder
    maxScore?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditSectionSumOrderByAggregateInput = {
    sortOrder?: SortOrder
    maxScore?: SortOrder
  }

  export type AuditSectionScalarRelationFilter = {
    is?: AuditSectionWhereInput
    isNot?: AuditSectionWhereInput
  }

  export type AuditOptionListRelationFilter = {
    every?: AuditOptionWhereInput
    some?: AuditOptionWhereInput
    none?: AuditOptionWhereInput
  }

  export type AuditAnswerListRelationFilter = {
    every?: AuditAnswerWhereInput
    some?: AuditAnswerWhereInput
    none?: AuditAnswerWhereInput
  }

  export type AuditOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditQuestionSectionIdCodeCompoundUniqueInput = {
    sectionId: string
    code: string
  }

  export type AuditQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    sectionId?: SortOrder
    code?: SortOrder
    text?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditQuestionAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type AuditQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    sectionId?: SortOrder
    code?: SortOrder
    text?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    sectionId?: SortOrder
    code?: SortOrder
    text?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditQuestionSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type AuditQuestionScalarRelationFilter = {
    is?: AuditQuestionWhereInput
    isNot?: AuditQuestionWhereInput
  }

  export type AuditOptionCountOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    label?: SortOrder
    points?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditOptionAvgOrderByAggregateInput = {
    points?: SortOrder
    sortOrder?: SortOrder
  }

  export type AuditOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    label?: SortOrder
    points?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditOptionMinOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    label?: SortOrder
    points?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditOptionSumOrderByAggregateInput = {
    points?: SortOrder
    sortOrder?: SortOrder
  }

  export type EnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AuditResultNullableScalarRelationFilter = {
    is?: AuditResultWhereInput | null
    isNot?: AuditResultWhereInput | null
  }

  export type AuditLeadNullableScalarRelationFilter = {
    is?: AuditLeadWhereInput | null
    isNot?: AuditLeadWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AuditSessionCountOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditSessionMinOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AuditSessionScalarRelationFilter = {
    is?: AuditSessionWhereInput
    isNot?: AuditSessionWhereInput
  }

  export type AuditOptionScalarRelationFilter = {
    is?: AuditOptionWhereInput
    isNot?: AuditOptionWhereInput
  }

  export type AuditAnswerSessionIdQuestionIdCompoundUniqueInput = {
    sessionId: string
    questionId: string
  }

  export type AuditAnswerCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    questionId?: SortOrder
    optionId?: SortOrder
    pointsAwarded?: SortOrder
    answeredAt?: SortOrder
  }

  export type AuditAnswerAvgOrderByAggregateInput = {
    pointsAwarded?: SortOrder
  }

  export type AuditAnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    questionId?: SortOrder
    optionId?: SortOrder
    pointsAwarded?: SortOrder
    answeredAt?: SortOrder
  }

  export type AuditAnswerMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    questionId?: SortOrder
    optionId?: SortOrder
    pointsAwarded?: SortOrder
    answeredAt?: SortOrder
  }

  export type AuditAnswerSumOrderByAggregateInput = {
    pointsAwarded?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AuditResultCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    totalScore?: SortOrder
    maxScore?: SortOrder
    tier?: SortOrder
    message?: SortOrder
    sectionScores?: SortOrder
    locked?: SortOrder
    calculatedAt?: SortOrder
  }

  export type AuditResultAvgOrderByAggregateInput = {
    totalScore?: SortOrder
    maxScore?: SortOrder
  }

  export type AuditResultMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    totalScore?: SortOrder
    maxScore?: SortOrder
    tier?: SortOrder
    message?: SortOrder
    locked?: SortOrder
    calculatedAt?: SortOrder
  }

  export type AuditResultMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    totalScore?: SortOrder
    maxScore?: SortOrder
    tier?: SortOrder
    message?: SortOrder
    locked?: SortOrder
    calculatedAt?: SortOrder
  }

  export type AuditResultSumOrderByAggregateInput = {
    totalScore?: SortOrder
    maxScore?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AuditLeadCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    companyName?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLeadMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    companyName?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLeadMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    companyName?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type AuditSectionCreateNestedManyWithoutTemplateInput = {
    create?: XOR<AuditSectionCreateWithoutTemplateInput, AuditSectionUncheckedCreateWithoutTemplateInput> | AuditSectionCreateWithoutTemplateInput[] | AuditSectionUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: AuditSectionCreateOrConnectWithoutTemplateInput | AuditSectionCreateOrConnectWithoutTemplateInput[]
    createMany?: AuditSectionCreateManyTemplateInputEnvelope
    connect?: AuditSectionWhereUniqueInput | AuditSectionWhereUniqueInput[]
  }

  export type AuditSessionCreateNestedManyWithoutTemplateInput = {
    create?: XOR<AuditSessionCreateWithoutTemplateInput, AuditSessionUncheckedCreateWithoutTemplateInput> | AuditSessionCreateWithoutTemplateInput[] | AuditSessionUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: AuditSessionCreateOrConnectWithoutTemplateInput | AuditSessionCreateOrConnectWithoutTemplateInput[]
    createMany?: AuditSessionCreateManyTemplateInputEnvelope
    connect?: AuditSessionWhereUniqueInput | AuditSessionWhereUniqueInput[]
  }

  export type AuditSectionUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<AuditSectionCreateWithoutTemplateInput, AuditSectionUncheckedCreateWithoutTemplateInput> | AuditSectionCreateWithoutTemplateInput[] | AuditSectionUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: AuditSectionCreateOrConnectWithoutTemplateInput | AuditSectionCreateOrConnectWithoutTemplateInput[]
    createMany?: AuditSectionCreateManyTemplateInputEnvelope
    connect?: AuditSectionWhereUniqueInput | AuditSectionWhereUniqueInput[]
  }

  export type AuditSessionUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<AuditSessionCreateWithoutTemplateInput, AuditSessionUncheckedCreateWithoutTemplateInput> | AuditSessionCreateWithoutTemplateInput[] | AuditSessionUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: AuditSessionCreateOrConnectWithoutTemplateInput | AuditSessionCreateOrConnectWithoutTemplateInput[]
    createMany?: AuditSessionCreateManyTemplateInputEnvelope
    connect?: AuditSessionWhereUniqueInput | AuditSessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AuditSectionUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<AuditSectionCreateWithoutTemplateInput, AuditSectionUncheckedCreateWithoutTemplateInput> | AuditSectionCreateWithoutTemplateInput[] | AuditSectionUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: AuditSectionCreateOrConnectWithoutTemplateInput | AuditSectionCreateOrConnectWithoutTemplateInput[]
    upsert?: AuditSectionUpsertWithWhereUniqueWithoutTemplateInput | AuditSectionUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: AuditSectionCreateManyTemplateInputEnvelope
    set?: AuditSectionWhereUniqueInput | AuditSectionWhereUniqueInput[]
    disconnect?: AuditSectionWhereUniqueInput | AuditSectionWhereUniqueInput[]
    delete?: AuditSectionWhereUniqueInput | AuditSectionWhereUniqueInput[]
    connect?: AuditSectionWhereUniqueInput | AuditSectionWhereUniqueInput[]
    update?: AuditSectionUpdateWithWhereUniqueWithoutTemplateInput | AuditSectionUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: AuditSectionUpdateManyWithWhereWithoutTemplateInput | AuditSectionUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: AuditSectionScalarWhereInput | AuditSectionScalarWhereInput[]
  }

  export type AuditSessionUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<AuditSessionCreateWithoutTemplateInput, AuditSessionUncheckedCreateWithoutTemplateInput> | AuditSessionCreateWithoutTemplateInput[] | AuditSessionUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: AuditSessionCreateOrConnectWithoutTemplateInput | AuditSessionCreateOrConnectWithoutTemplateInput[]
    upsert?: AuditSessionUpsertWithWhereUniqueWithoutTemplateInput | AuditSessionUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: AuditSessionCreateManyTemplateInputEnvelope
    set?: AuditSessionWhereUniqueInput | AuditSessionWhereUniqueInput[]
    disconnect?: AuditSessionWhereUniqueInput | AuditSessionWhereUniqueInput[]
    delete?: AuditSessionWhereUniqueInput | AuditSessionWhereUniqueInput[]
    connect?: AuditSessionWhereUniqueInput | AuditSessionWhereUniqueInput[]
    update?: AuditSessionUpdateWithWhereUniqueWithoutTemplateInput | AuditSessionUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: AuditSessionUpdateManyWithWhereWithoutTemplateInput | AuditSessionUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: AuditSessionScalarWhereInput | AuditSessionScalarWhereInput[]
  }

  export type AuditSectionUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<AuditSectionCreateWithoutTemplateInput, AuditSectionUncheckedCreateWithoutTemplateInput> | AuditSectionCreateWithoutTemplateInput[] | AuditSectionUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: AuditSectionCreateOrConnectWithoutTemplateInput | AuditSectionCreateOrConnectWithoutTemplateInput[]
    upsert?: AuditSectionUpsertWithWhereUniqueWithoutTemplateInput | AuditSectionUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: AuditSectionCreateManyTemplateInputEnvelope
    set?: AuditSectionWhereUniqueInput | AuditSectionWhereUniqueInput[]
    disconnect?: AuditSectionWhereUniqueInput | AuditSectionWhereUniqueInput[]
    delete?: AuditSectionWhereUniqueInput | AuditSectionWhereUniqueInput[]
    connect?: AuditSectionWhereUniqueInput | AuditSectionWhereUniqueInput[]
    update?: AuditSectionUpdateWithWhereUniqueWithoutTemplateInput | AuditSectionUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: AuditSectionUpdateManyWithWhereWithoutTemplateInput | AuditSectionUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: AuditSectionScalarWhereInput | AuditSectionScalarWhereInput[]
  }

  export type AuditSessionUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<AuditSessionCreateWithoutTemplateInput, AuditSessionUncheckedCreateWithoutTemplateInput> | AuditSessionCreateWithoutTemplateInput[] | AuditSessionUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: AuditSessionCreateOrConnectWithoutTemplateInput | AuditSessionCreateOrConnectWithoutTemplateInput[]
    upsert?: AuditSessionUpsertWithWhereUniqueWithoutTemplateInput | AuditSessionUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: AuditSessionCreateManyTemplateInputEnvelope
    set?: AuditSessionWhereUniqueInput | AuditSessionWhereUniqueInput[]
    disconnect?: AuditSessionWhereUniqueInput | AuditSessionWhereUniqueInput[]
    delete?: AuditSessionWhereUniqueInput | AuditSessionWhereUniqueInput[]
    connect?: AuditSessionWhereUniqueInput | AuditSessionWhereUniqueInput[]
    update?: AuditSessionUpdateWithWhereUniqueWithoutTemplateInput | AuditSessionUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: AuditSessionUpdateManyWithWhereWithoutTemplateInput | AuditSessionUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: AuditSessionScalarWhereInput | AuditSessionScalarWhereInput[]
  }

  export type AuditTemplateCreateNestedOneWithoutSectionsInput = {
    create?: XOR<AuditTemplateCreateWithoutSectionsInput, AuditTemplateUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: AuditTemplateCreateOrConnectWithoutSectionsInput
    connect?: AuditTemplateWhereUniqueInput
  }

  export type AuditQuestionCreateNestedManyWithoutSectionInput = {
    create?: XOR<AuditQuestionCreateWithoutSectionInput, AuditQuestionUncheckedCreateWithoutSectionInput> | AuditQuestionCreateWithoutSectionInput[] | AuditQuestionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: AuditQuestionCreateOrConnectWithoutSectionInput | AuditQuestionCreateOrConnectWithoutSectionInput[]
    createMany?: AuditQuestionCreateManySectionInputEnvelope
    connect?: AuditQuestionWhereUniqueInput | AuditQuestionWhereUniqueInput[]
  }

  export type AuditQuestionUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<AuditQuestionCreateWithoutSectionInput, AuditQuestionUncheckedCreateWithoutSectionInput> | AuditQuestionCreateWithoutSectionInput[] | AuditQuestionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: AuditQuestionCreateOrConnectWithoutSectionInput | AuditQuestionCreateOrConnectWithoutSectionInput[]
    createMany?: AuditQuestionCreateManySectionInputEnvelope
    connect?: AuditQuestionWhereUniqueInput | AuditQuestionWhereUniqueInput[]
  }

  export type AuditTemplateUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<AuditTemplateCreateWithoutSectionsInput, AuditTemplateUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: AuditTemplateCreateOrConnectWithoutSectionsInput
    upsert?: AuditTemplateUpsertWithoutSectionsInput
    connect?: AuditTemplateWhereUniqueInput
    update?: XOR<XOR<AuditTemplateUpdateToOneWithWhereWithoutSectionsInput, AuditTemplateUpdateWithoutSectionsInput>, AuditTemplateUncheckedUpdateWithoutSectionsInput>
  }

  export type AuditQuestionUpdateManyWithoutSectionNestedInput = {
    create?: XOR<AuditQuestionCreateWithoutSectionInput, AuditQuestionUncheckedCreateWithoutSectionInput> | AuditQuestionCreateWithoutSectionInput[] | AuditQuestionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: AuditQuestionCreateOrConnectWithoutSectionInput | AuditQuestionCreateOrConnectWithoutSectionInput[]
    upsert?: AuditQuestionUpsertWithWhereUniqueWithoutSectionInput | AuditQuestionUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: AuditQuestionCreateManySectionInputEnvelope
    set?: AuditQuestionWhereUniqueInput | AuditQuestionWhereUniqueInput[]
    disconnect?: AuditQuestionWhereUniqueInput | AuditQuestionWhereUniqueInput[]
    delete?: AuditQuestionWhereUniqueInput | AuditQuestionWhereUniqueInput[]
    connect?: AuditQuestionWhereUniqueInput | AuditQuestionWhereUniqueInput[]
    update?: AuditQuestionUpdateWithWhereUniqueWithoutSectionInput | AuditQuestionUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: AuditQuestionUpdateManyWithWhereWithoutSectionInput | AuditQuestionUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: AuditQuestionScalarWhereInput | AuditQuestionScalarWhereInput[]
  }

  export type AuditQuestionUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<AuditQuestionCreateWithoutSectionInput, AuditQuestionUncheckedCreateWithoutSectionInput> | AuditQuestionCreateWithoutSectionInput[] | AuditQuestionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: AuditQuestionCreateOrConnectWithoutSectionInput | AuditQuestionCreateOrConnectWithoutSectionInput[]
    upsert?: AuditQuestionUpsertWithWhereUniqueWithoutSectionInput | AuditQuestionUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: AuditQuestionCreateManySectionInputEnvelope
    set?: AuditQuestionWhereUniqueInput | AuditQuestionWhereUniqueInput[]
    disconnect?: AuditQuestionWhereUniqueInput | AuditQuestionWhereUniqueInput[]
    delete?: AuditQuestionWhereUniqueInput | AuditQuestionWhereUniqueInput[]
    connect?: AuditQuestionWhereUniqueInput | AuditQuestionWhereUniqueInput[]
    update?: AuditQuestionUpdateWithWhereUniqueWithoutSectionInput | AuditQuestionUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: AuditQuestionUpdateManyWithWhereWithoutSectionInput | AuditQuestionUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: AuditQuestionScalarWhereInput | AuditQuestionScalarWhereInput[]
  }

  export type AuditSectionCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<AuditSectionCreateWithoutQuestionsInput, AuditSectionUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: AuditSectionCreateOrConnectWithoutQuestionsInput
    connect?: AuditSectionWhereUniqueInput
  }

  export type AuditOptionCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AuditOptionCreateWithoutQuestionInput, AuditOptionUncheckedCreateWithoutQuestionInput> | AuditOptionCreateWithoutQuestionInput[] | AuditOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AuditOptionCreateOrConnectWithoutQuestionInput | AuditOptionCreateOrConnectWithoutQuestionInput[]
    createMany?: AuditOptionCreateManyQuestionInputEnvelope
    connect?: AuditOptionWhereUniqueInput | AuditOptionWhereUniqueInput[]
  }

  export type AuditAnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AuditAnswerCreateWithoutQuestionInput, AuditAnswerUncheckedCreateWithoutQuestionInput> | AuditAnswerCreateWithoutQuestionInput[] | AuditAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AuditAnswerCreateOrConnectWithoutQuestionInput | AuditAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AuditAnswerCreateManyQuestionInputEnvelope
    connect?: AuditAnswerWhereUniqueInput | AuditAnswerWhereUniqueInput[]
  }

  export type AuditOptionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AuditOptionCreateWithoutQuestionInput, AuditOptionUncheckedCreateWithoutQuestionInput> | AuditOptionCreateWithoutQuestionInput[] | AuditOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AuditOptionCreateOrConnectWithoutQuestionInput | AuditOptionCreateOrConnectWithoutQuestionInput[]
    createMany?: AuditOptionCreateManyQuestionInputEnvelope
    connect?: AuditOptionWhereUniqueInput | AuditOptionWhereUniqueInput[]
  }

  export type AuditAnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AuditAnswerCreateWithoutQuestionInput, AuditAnswerUncheckedCreateWithoutQuestionInput> | AuditAnswerCreateWithoutQuestionInput[] | AuditAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AuditAnswerCreateOrConnectWithoutQuestionInput | AuditAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AuditAnswerCreateManyQuestionInputEnvelope
    connect?: AuditAnswerWhereUniqueInput | AuditAnswerWhereUniqueInput[]
  }

  export type AuditSectionUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<AuditSectionCreateWithoutQuestionsInput, AuditSectionUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: AuditSectionCreateOrConnectWithoutQuestionsInput
    upsert?: AuditSectionUpsertWithoutQuestionsInput
    connect?: AuditSectionWhereUniqueInput
    update?: XOR<XOR<AuditSectionUpdateToOneWithWhereWithoutQuestionsInput, AuditSectionUpdateWithoutQuestionsInput>, AuditSectionUncheckedUpdateWithoutQuestionsInput>
  }

  export type AuditOptionUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AuditOptionCreateWithoutQuestionInput, AuditOptionUncheckedCreateWithoutQuestionInput> | AuditOptionCreateWithoutQuestionInput[] | AuditOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AuditOptionCreateOrConnectWithoutQuestionInput | AuditOptionCreateOrConnectWithoutQuestionInput[]
    upsert?: AuditOptionUpsertWithWhereUniqueWithoutQuestionInput | AuditOptionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AuditOptionCreateManyQuestionInputEnvelope
    set?: AuditOptionWhereUniqueInput | AuditOptionWhereUniqueInput[]
    disconnect?: AuditOptionWhereUniqueInput | AuditOptionWhereUniqueInput[]
    delete?: AuditOptionWhereUniqueInput | AuditOptionWhereUniqueInput[]
    connect?: AuditOptionWhereUniqueInput | AuditOptionWhereUniqueInput[]
    update?: AuditOptionUpdateWithWhereUniqueWithoutQuestionInput | AuditOptionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AuditOptionUpdateManyWithWhereWithoutQuestionInput | AuditOptionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AuditOptionScalarWhereInput | AuditOptionScalarWhereInput[]
  }

  export type AuditAnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AuditAnswerCreateWithoutQuestionInput, AuditAnswerUncheckedCreateWithoutQuestionInput> | AuditAnswerCreateWithoutQuestionInput[] | AuditAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AuditAnswerCreateOrConnectWithoutQuestionInput | AuditAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AuditAnswerUpsertWithWhereUniqueWithoutQuestionInput | AuditAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AuditAnswerCreateManyQuestionInputEnvelope
    set?: AuditAnswerWhereUniqueInput | AuditAnswerWhereUniqueInput[]
    disconnect?: AuditAnswerWhereUniqueInput | AuditAnswerWhereUniqueInput[]
    delete?: AuditAnswerWhereUniqueInput | AuditAnswerWhereUniqueInput[]
    connect?: AuditAnswerWhereUniqueInput | AuditAnswerWhereUniqueInput[]
    update?: AuditAnswerUpdateWithWhereUniqueWithoutQuestionInput | AuditAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AuditAnswerUpdateManyWithWhereWithoutQuestionInput | AuditAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AuditAnswerScalarWhereInput | AuditAnswerScalarWhereInput[]
  }

  export type AuditOptionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AuditOptionCreateWithoutQuestionInput, AuditOptionUncheckedCreateWithoutQuestionInput> | AuditOptionCreateWithoutQuestionInput[] | AuditOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AuditOptionCreateOrConnectWithoutQuestionInput | AuditOptionCreateOrConnectWithoutQuestionInput[]
    upsert?: AuditOptionUpsertWithWhereUniqueWithoutQuestionInput | AuditOptionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AuditOptionCreateManyQuestionInputEnvelope
    set?: AuditOptionWhereUniqueInput | AuditOptionWhereUniqueInput[]
    disconnect?: AuditOptionWhereUniqueInput | AuditOptionWhereUniqueInput[]
    delete?: AuditOptionWhereUniqueInput | AuditOptionWhereUniqueInput[]
    connect?: AuditOptionWhereUniqueInput | AuditOptionWhereUniqueInput[]
    update?: AuditOptionUpdateWithWhereUniqueWithoutQuestionInput | AuditOptionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AuditOptionUpdateManyWithWhereWithoutQuestionInput | AuditOptionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AuditOptionScalarWhereInput | AuditOptionScalarWhereInput[]
  }

  export type AuditAnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AuditAnswerCreateWithoutQuestionInput, AuditAnswerUncheckedCreateWithoutQuestionInput> | AuditAnswerCreateWithoutQuestionInput[] | AuditAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AuditAnswerCreateOrConnectWithoutQuestionInput | AuditAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AuditAnswerUpsertWithWhereUniqueWithoutQuestionInput | AuditAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AuditAnswerCreateManyQuestionInputEnvelope
    set?: AuditAnswerWhereUniqueInput | AuditAnswerWhereUniqueInput[]
    disconnect?: AuditAnswerWhereUniqueInput | AuditAnswerWhereUniqueInput[]
    delete?: AuditAnswerWhereUniqueInput | AuditAnswerWhereUniqueInput[]
    connect?: AuditAnswerWhereUniqueInput | AuditAnswerWhereUniqueInput[]
    update?: AuditAnswerUpdateWithWhereUniqueWithoutQuestionInput | AuditAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AuditAnswerUpdateManyWithWhereWithoutQuestionInput | AuditAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AuditAnswerScalarWhereInput | AuditAnswerScalarWhereInput[]
  }

  export type AuditQuestionCreateNestedOneWithoutOptionsInput = {
    create?: XOR<AuditQuestionCreateWithoutOptionsInput, AuditQuestionUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: AuditQuestionCreateOrConnectWithoutOptionsInput
    connect?: AuditQuestionWhereUniqueInput
  }

  export type AuditAnswerCreateNestedManyWithoutOptionInput = {
    create?: XOR<AuditAnswerCreateWithoutOptionInput, AuditAnswerUncheckedCreateWithoutOptionInput> | AuditAnswerCreateWithoutOptionInput[] | AuditAnswerUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: AuditAnswerCreateOrConnectWithoutOptionInput | AuditAnswerCreateOrConnectWithoutOptionInput[]
    createMany?: AuditAnswerCreateManyOptionInputEnvelope
    connect?: AuditAnswerWhereUniqueInput | AuditAnswerWhereUniqueInput[]
  }

  export type AuditAnswerUncheckedCreateNestedManyWithoutOptionInput = {
    create?: XOR<AuditAnswerCreateWithoutOptionInput, AuditAnswerUncheckedCreateWithoutOptionInput> | AuditAnswerCreateWithoutOptionInput[] | AuditAnswerUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: AuditAnswerCreateOrConnectWithoutOptionInput | AuditAnswerCreateOrConnectWithoutOptionInput[]
    createMany?: AuditAnswerCreateManyOptionInputEnvelope
    connect?: AuditAnswerWhereUniqueInput | AuditAnswerWhereUniqueInput[]
  }

  export type AuditQuestionUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<AuditQuestionCreateWithoutOptionsInput, AuditQuestionUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: AuditQuestionCreateOrConnectWithoutOptionsInput
    upsert?: AuditQuestionUpsertWithoutOptionsInput
    connect?: AuditQuestionWhereUniqueInput
    update?: XOR<XOR<AuditQuestionUpdateToOneWithWhereWithoutOptionsInput, AuditQuestionUpdateWithoutOptionsInput>, AuditQuestionUncheckedUpdateWithoutOptionsInput>
  }

  export type AuditAnswerUpdateManyWithoutOptionNestedInput = {
    create?: XOR<AuditAnswerCreateWithoutOptionInput, AuditAnswerUncheckedCreateWithoutOptionInput> | AuditAnswerCreateWithoutOptionInput[] | AuditAnswerUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: AuditAnswerCreateOrConnectWithoutOptionInput | AuditAnswerCreateOrConnectWithoutOptionInput[]
    upsert?: AuditAnswerUpsertWithWhereUniqueWithoutOptionInput | AuditAnswerUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: AuditAnswerCreateManyOptionInputEnvelope
    set?: AuditAnswerWhereUniqueInput | AuditAnswerWhereUniqueInput[]
    disconnect?: AuditAnswerWhereUniqueInput | AuditAnswerWhereUniqueInput[]
    delete?: AuditAnswerWhereUniqueInput | AuditAnswerWhereUniqueInput[]
    connect?: AuditAnswerWhereUniqueInput | AuditAnswerWhereUniqueInput[]
    update?: AuditAnswerUpdateWithWhereUniqueWithoutOptionInput | AuditAnswerUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: AuditAnswerUpdateManyWithWhereWithoutOptionInput | AuditAnswerUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: AuditAnswerScalarWhereInput | AuditAnswerScalarWhereInput[]
  }

  export type AuditAnswerUncheckedUpdateManyWithoutOptionNestedInput = {
    create?: XOR<AuditAnswerCreateWithoutOptionInput, AuditAnswerUncheckedCreateWithoutOptionInput> | AuditAnswerCreateWithoutOptionInput[] | AuditAnswerUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: AuditAnswerCreateOrConnectWithoutOptionInput | AuditAnswerCreateOrConnectWithoutOptionInput[]
    upsert?: AuditAnswerUpsertWithWhereUniqueWithoutOptionInput | AuditAnswerUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: AuditAnswerCreateManyOptionInputEnvelope
    set?: AuditAnswerWhereUniqueInput | AuditAnswerWhereUniqueInput[]
    disconnect?: AuditAnswerWhereUniqueInput | AuditAnswerWhereUniqueInput[]
    delete?: AuditAnswerWhereUniqueInput | AuditAnswerWhereUniqueInput[]
    connect?: AuditAnswerWhereUniqueInput | AuditAnswerWhereUniqueInput[]
    update?: AuditAnswerUpdateWithWhereUniqueWithoutOptionInput | AuditAnswerUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: AuditAnswerUpdateManyWithWhereWithoutOptionInput | AuditAnswerUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: AuditAnswerScalarWhereInput | AuditAnswerScalarWhereInput[]
  }

  export type AuditTemplateCreateNestedOneWithoutSessionsInput = {
    create?: XOR<AuditTemplateCreateWithoutSessionsInput, AuditTemplateUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: AuditTemplateCreateOrConnectWithoutSessionsInput
    connect?: AuditTemplateWhereUniqueInput
  }

  export type AuditAnswerCreateNestedManyWithoutSessionInput = {
    create?: XOR<AuditAnswerCreateWithoutSessionInput, AuditAnswerUncheckedCreateWithoutSessionInput> | AuditAnswerCreateWithoutSessionInput[] | AuditAnswerUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AuditAnswerCreateOrConnectWithoutSessionInput | AuditAnswerCreateOrConnectWithoutSessionInput[]
    createMany?: AuditAnswerCreateManySessionInputEnvelope
    connect?: AuditAnswerWhereUniqueInput | AuditAnswerWhereUniqueInput[]
  }

  export type AuditResultCreateNestedOneWithoutSessionInput = {
    create?: XOR<AuditResultCreateWithoutSessionInput, AuditResultUncheckedCreateWithoutSessionInput>
    connectOrCreate?: AuditResultCreateOrConnectWithoutSessionInput
    connect?: AuditResultWhereUniqueInput
  }

  export type AuditLeadCreateNestedOneWithoutSessionInput = {
    create?: XOR<AuditLeadCreateWithoutSessionInput, AuditLeadUncheckedCreateWithoutSessionInput>
    connectOrCreate?: AuditLeadCreateOrConnectWithoutSessionInput
    connect?: AuditLeadWhereUniqueInput
  }

  export type AuditAnswerUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<AuditAnswerCreateWithoutSessionInput, AuditAnswerUncheckedCreateWithoutSessionInput> | AuditAnswerCreateWithoutSessionInput[] | AuditAnswerUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AuditAnswerCreateOrConnectWithoutSessionInput | AuditAnswerCreateOrConnectWithoutSessionInput[]
    createMany?: AuditAnswerCreateManySessionInputEnvelope
    connect?: AuditAnswerWhereUniqueInput | AuditAnswerWhereUniqueInput[]
  }

  export type AuditResultUncheckedCreateNestedOneWithoutSessionInput = {
    create?: XOR<AuditResultCreateWithoutSessionInput, AuditResultUncheckedCreateWithoutSessionInput>
    connectOrCreate?: AuditResultCreateOrConnectWithoutSessionInput
    connect?: AuditResultWhereUniqueInput
  }

  export type AuditLeadUncheckedCreateNestedOneWithoutSessionInput = {
    create?: XOR<AuditLeadCreateWithoutSessionInput, AuditLeadUncheckedCreateWithoutSessionInput>
    connectOrCreate?: AuditLeadCreateOrConnectWithoutSessionInput
    connect?: AuditLeadWhereUniqueInput
  }

  export type EnumSessionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SessionStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AuditTemplateUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<AuditTemplateCreateWithoutSessionsInput, AuditTemplateUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: AuditTemplateCreateOrConnectWithoutSessionsInput
    upsert?: AuditTemplateUpsertWithoutSessionsInput
    connect?: AuditTemplateWhereUniqueInput
    update?: XOR<XOR<AuditTemplateUpdateToOneWithWhereWithoutSessionsInput, AuditTemplateUpdateWithoutSessionsInput>, AuditTemplateUncheckedUpdateWithoutSessionsInput>
  }

  export type AuditAnswerUpdateManyWithoutSessionNestedInput = {
    create?: XOR<AuditAnswerCreateWithoutSessionInput, AuditAnswerUncheckedCreateWithoutSessionInput> | AuditAnswerCreateWithoutSessionInput[] | AuditAnswerUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AuditAnswerCreateOrConnectWithoutSessionInput | AuditAnswerCreateOrConnectWithoutSessionInput[]
    upsert?: AuditAnswerUpsertWithWhereUniqueWithoutSessionInput | AuditAnswerUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: AuditAnswerCreateManySessionInputEnvelope
    set?: AuditAnswerWhereUniqueInput | AuditAnswerWhereUniqueInput[]
    disconnect?: AuditAnswerWhereUniqueInput | AuditAnswerWhereUniqueInput[]
    delete?: AuditAnswerWhereUniqueInput | AuditAnswerWhereUniqueInput[]
    connect?: AuditAnswerWhereUniqueInput | AuditAnswerWhereUniqueInput[]
    update?: AuditAnswerUpdateWithWhereUniqueWithoutSessionInput | AuditAnswerUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: AuditAnswerUpdateManyWithWhereWithoutSessionInput | AuditAnswerUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: AuditAnswerScalarWhereInput | AuditAnswerScalarWhereInput[]
  }

  export type AuditResultUpdateOneWithoutSessionNestedInput = {
    create?: XOR<AuditResultCreateWithoutSessionInput, AuditResultUncheckedCreateWithoutSessionInput>
    connectOrCreate?: AuditResultCreateOrConnectWithoutSessionInput
    upsert?: AuditResultUpsertWithoutSessionInput
    disconnect?: AuditResultWhereInput | boolean
    delete?: AuditResultWhereInput | boolean
    connect?: AuditResultWhereUniqueInput
    update?: XOR<XOR<AuditResultUpdateToOneWithWhereWithoutSessionInput, AuditResultUpdateWithoutSessionInput>, AuditResultUncheckedUpdateWithoutSessionInput>
  }

  export type AuditLeadUpdateOneWithoutSessionNestedInput = {
    create?: XOR<AuditLeadCreateWithoutSessionInput, AuditLeadUncheckedCreateWithoutSessionInput>
    connectOrCreate?: AuditLeadCreateOrConnectWithoutSessionInput
    upsert?: AuditLeadUpsertWithoutSessionInput
    disconnect?: AuditLeadWhereInput | boolean
    delete?: AuditLeadWhereInput | boolean
    connect?: AuditLeadWhereUniqueInput
    update?: XOR<XOR<AuditLeadUpdateToOneWithWhereWithoutSessionInput, AuditLeadUpdateWithoutSessionInput>, AuditLeadUncheckedUpdateWithoutSessionInput>
  }

  export type AuditAnswerUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<AuditAnswerCreateWithoutSessionInput, AuditAnswerUncheckedCreateWithoutSessionInput> | AuditAnswerCreateWithoutSessionInput[] | AuditAnswerUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AuditAnswerCreateOrConnectWithoutSessionInput | AuditAnswerCreateOrConnectWithoutSessionInput[]
    upsert?: AuditAnswerUpsertWithWhereUniqueWithoutSessionInput | AuditAnswerUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: AuditAnswerCreateManySessionInputEnvelope
    set?: AuditAnswerWhereUniqueInput | AuditAnswerWhereUniqueInput[]
    disconnect?: AuditAnswerWhereUniqueInput | AuditAnswerWhereUniqueInput[]
    delete?: AuditAnswerWhereUniqueInput | AuditAnswerWhereUniqueInput[]
    connect?: AuditAnswerWhereUniqueInput | AuditAnswerWhereUniqueInput[]
    update?: AuditAnswerUpdateWithWhereUniqueWithoutSessionInput | AuditAnswerUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: AuditAnswerUpdateManyWithWhereWithoutSessionInput | AuditAnswerUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: AuditAnswerScalarWhereInput | AuditAnswerScalarWhereInput[]
  }

  export type AuditResultUncheckedUpdateOneWithoutSessionNestedInput = {
    create?: XOR<AuditResultCreateWithoutSessionInput, AuditResultUncheckedCreateWithoutSessionInput>
    connectOrCreate?: AuditResultCreateOrConnectWithoutSessionInput
    upsert?: AuditResultUpsertWithoutSessionInput
    disconnect?: AuditResultWhereInput | boolean
    delete?: AuditResultWhereInput | boolean
    connect?: AuditResultWhereUniqueInput
    update?: XOR<XOR<AuditResultUpdateToOneWithWhereWithoutSessionInput, AuditResultUpdateWithoutSessionInput>, AuditResultUncheckedUpdateWithoutSessionInput>
  }

  export type AuditLeadUncheckedUpdateOneWithoutSessionNestedInput = {
    create?: XOR<AuditLeadCreateWithoutSessionInput, AuditLeadUncheckedCreateWithoutSessionInput>
    connectOrCreate?: AuditLeadCreateOrConnectWithoutSessionInput
    upsert?: AuditLeadUpsertWithoutSessionInput
    disconnect?: AuditLeadWhereInput | boolean
    delete?: AuditLeadWhereInput | boolean
    connect?: AuditLeadWhereUniqueInput
    update?: XOR<XOR<AuditLeadUpdateToOneWithWhereWithoutSessionInput, AuditLeadUpdateWithoutSessionInput>, AuditLeadUncheckedUpdateWithoutSessionInput>
  }

  export type AuditSessionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<AuditSessionCreateWithoutAnswersInput, AuditSessionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: AuditSessionCreateOrConnectWithoutAnswersInput
    connect?: AuditSessionWhereUniqueInput
  }

  export type AuditQuestionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<AuditQuestionCreateWithoutAnswersInput, AuditQuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: AuditQuestionCreateOrConnectWithoutAnswersInput
    connect?: AuditQuestionWhereUniqueInput
  }

  export type AuditOptionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<AuditOptionCreateWithoutAnswersInput, AuditOptionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: AuditOptionCreateOrConnectWithoutAnswersInput
    connect?: AuditOptionWhereUniqueInput
  }

  export type AuditSessionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<AuditSessionCreateWithoutAnswersInput, AuditSessionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: AuditSessionCreateOrConnectWithoutAnswersInput
    upsert?: AuditSessionUpsertWithoutAnswersInput
    connect?: AuditSessionWhereUniqueInput
    update?: XOR<XOR<AuditSessionUpdateToOneWithWhereWithoutAnswersInput, AuditSessionUpdateWithoutAnswersInput>, AuditSessionUncheckedUpdateWithoutAnswersInput>
  }

  export type AuditQuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<AuditQuestionCreateWithoutAnswersInput, AuditQuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: AuditQuestionCreateOrConnectWithoutAnswersInput
    upsert?: AuditQuestionUpsertWithoutAnswersInput
    connect?: AuditQuestionWhereUniqueInput
    update?: XOR<XOR<AuditQuestionUpdateToOneWithWhereWithoutAnswersInput, AuditQuestionUpdateWithoutAnswersInput>, AuditQuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type AuditOptionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<AuditOptionCreateWithoutAnswersInput, AuditOptionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: AuditOptionCreateOrConnectWithoutAnswersInput
    upsert?: AuditOptionUpsertWithoutAnswersInput
    connect?: AuditOptionWhereUniqueInput
    update?: XOR<XOR<AuditOptionUpdateToOneWithWhereWithoutAnswersInput, AuditOptionUpdateWithoutAnswersInput>, AuditOptionUncheckedUpdateWithoutAnswersInput>
  }

  export type AuditSessionCreateNestedOneWithoutResultInput = {
    create?: XOR<AuditSessionCreateWithoutResultInput, AuditSessionUncheckedCreateWithoutResultInput>
    connectOrCreate?: AuditSessionCreateOrConnectWithoutResultInput
    connect?: AuditSessionWhereUniqueInput
  }

  export type AuditSessionUpdateOneRequiredWithoutResultNestedInput = {
    create?: XOR<AuditSessionCreateWithoutResultInput, AuditSessionUncheckedCreateWithoutResultInput>
    connectOrCreate?: AuditSessionCreateOrConnectWithoutResultInput
    upsert?: AuditSessionUpsertWithoutResultInput
    connect?: AuditSessionWhereUniqueInput
    update?: XOR<XOR<AuditSessionUpdateToOneWithWhereWithoutResultInput, AuditSessionUpdateWithoutResultInput>, AuditSessionUncheckedUpdateWithoutResultInput>
  }

  export type AuditSessionCreateNestedOneWithoutLeadInput = {
    create?: XOR<AuditSessionCreateWithoutLeadInput, AuditSessionUncheckedCreateWithoutLeadInput>
    connectOrCreate?: AuditSessionCreateOrConnectWithoutLeadInput
    connect?: AuditSessionWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AuditSessionUpdateOneRequiredWithoutLeadNestedInput = {
    create?: XOR<AuditSessionCreateWithoutLeadInput, AuditSessionUncheckedCreateWithoutLeadInput>
    connectOrCreate?: AuditSessionCreateOrConnectWithoutLeadInput
    upsert?: AuditSessionUpsertWithoutLeadInput
    connect?: AuditSessionWhereUniqueInput
    update?: XOR<XOR<AuditSessionUpdateToOneWithWhereWithoutLeadInput, AuditSessionUpdateWithoutLeadInput>, AuditSessionUncheckedUpdateWithoutLeadInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type AuditSectionCreateWithoutTemplateInput = {
    id?: string
    code: string
    title: string
    sortOrder: number
    maxScore: number
    createdAt?: Date | string
    questions?: AuditQuestionCreateNestedManyWithoutSectionInput
  }

  export type AuditSectionUncheckedCreateWithoutTemplateInput = {
    id?: string
    code: string
    title: string
    sortOrder: number
    maxScore: number
    createdAt?: Date | string
    questions?: AuditQuestionUncheckedCreateNestedManyWithoutSectionInput
  }

  export type AuditSectionCreateOrConnectWithoutTemplateInput = {
    where: AuditSectionWhereUniqueInput
    create: XOR<AuditSectionCreateWithoutTemplateInput, AuditSectionUncheckedCreateWithoutTemplateInput>
  }

  export type AuditSectionCreateManyTemplateInputEnvelope = {
    data: AuditSectionCreateManyTemplateInput | AuditSectionCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type AuditSessionCreateWithoutTemplateInput = {
    id?: string
    status?: $Enums.SessionStatus
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    answers?: AuditAnswerCreateNestedManyWithoutSessionInput
    result?: AuditResultCreateNestedOneWithoutSessionInput
    lead?: AuditLeadCreateNestedOneWithoutSessionInput
  }

  export type AuditSessionUncheckedCreateWithoutTemplateInput = {
    id?: string
    status?: $Enums.SessionStatus
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    answers?: AuditAnswerUncheckedCreateNestedManyWithoutSessionInput
    result?: AuditResultUncheckedCreateNestedOneWithoutSessionInput
    lead?: AuditLeadUncheckedCreateNestedOneWithoutSessionInput
  }

  export type AuditSessionCreateOrConnectWithoutTemplateInput = {
    where: AuditSessionWhereUniqueInput
    create: XOR<AuditSessionCreateWithoutTemplateInput, AuditSessionUncheckedCreateWithoutTemplateInput>
  }

  export type AuditSessionCreateManyTemplateInputEnvelope = {
    data: AuditSessionCreateManyTemplateInput | AuditSessionCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type AuditSectionUpsertWithWhereUniqueWithoutTemplateInput = {
    where: AuditSectionWhereUniqueInput
    update: XOR<AuditSectionUpdateWithoutTemplateInput, AuditSectionUncheckedUpdateWithoutTemplateInput>
    create: XOR<AuditSectionCreateWithoutTemplateInput, AuditSectionUncheckedCreateWithoutTemplateInput>
  }

  export type AuditSectionUpdateWithWhereUniqueWithoutTemplateInput = {
    where: AuditSectionWhereUniqueInput
    data: XOR<AuditSectionUpdateWithoutTemplateInput, AuditSectionUncheckedUpdateWithoutTemplateInput>
  }

  export type AuditSectionUpdateManyWithWhereWithoutTemplateInput = {
    where: AuditSectionScalarWhereInput
    data: XOR<AuditSectionUpdateManyMutationInput, AuditSectionUncheckedUpdateManyWithoutTemplateInput>
  }

  export type AuditSectionScalarWhereInput = {
    AND?: AuditSectionScalarWhereInput | AuditSectionScalarWhereInput[]
    OR?: AuditSectionScalarWhereInput[]
    NOT?: AuditSectionScalarWhereInput | AuditSectionScalarWhereInput[]
    id?: StringFilter<"AuditSection"> | string
    templateId?: StringFilter<"AuditSection"> | string
    code?: StringFilter<"AuditSection"> | string
    title?: StringFilter<"AuditSection"> | string
    sortOrder?: IntFilter<"AuditSection"> | number
    maxScore?: IntFilter<"AuditSection"> | number
    createdAt?: DateTimeFilter<"AuditSection"> | Date | string
  }

  export type AuditSessionUpsertWithWhereUniqueWithoutTemplateInput = {
    where: AuditSessionWhereUniqueInput
    update: XOR<AuditSessionUpdateWithoutTemplateInput, AuditSessionUncheckedUpdateWithoutTemplateInput>
    create: XOR<AuditSessionCreateWithoutTemplateInput, AuditSessionUncheckedCreateWithoutTemplateInput>
  }

  export type AuditSessionUpdateWithWhereUniqueWithoutTemplateInput = {
    where: AuditSessionWhereUniqueInput
    data: XOR<AuditSessionUpdateWithoutTemplateInput, AuditSessionUncheckedUpdateWithoutTemplateInput>
  }

  export type AuditSessionUpdateManyWithWhereWithoutTemplateInput = {
    where: AuditSessionScalarWhereInput
    data: XOR<AuditSessionUpdateManyMutationInput, AuditSessionUncheckedUpdateManyWithoutTemplateInput>
  }

  export type AuditSessionScalarWhereInput = {
    AND?: AuditSessionScalarWhereInput | AuditSessionScalarWhereInput[]
    OR?: AuditSessionScalarWhereInput[]
    NOT?: AuditSessionScalarWhereInput | AuditSessionScalarWhereInput[]
    id?: StringFilter<"AuditSession"> | string
    templateId?: StringFilter<"AuditSession"> | string
    status?: EnumSessionStatusFilter<"AuditSession"> | $Enums.SessionStatus
    startedAt?: DateTimeFilter<"AuditSession"> | Date | string
    completedAt?: DateTimeNullableFilter<"AuditSession"> | Date | string | null
    createdAt?: DateTimeFilter<"AuditSession"> | Date | string
  }

  export type AuditTemplateCreateWithoutSectionsInput = {
    id?: string
    name: string
    version: number
    isActive?: boolean
    maxScore: number
    createdAt?: Date | string
    sessions?: AuditSessionCreateNestedManyWithoutTemplateInput
  }

  export type AuditTemplateUncheckedCreateWithoutSectionsInput = {
    id?: string
    name: string
    version: number
    isActive?: boolean
    maxScore: number
    createdAt?: Date | string
    sessions?: AuditSessionUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type AuditTemplateCreateOrConnectWithoutSectionsInput = {
    where: AuditTemplateWhereUniqueInput
    create: XOR<AuditTemplateCreateWithoutSectionsInput, AuditTemplateUncheckedCreateWithoutSectionsInput>
  }

  export type AuditQuestionCreateWithoutSectionInput = {
    id?: string
    code: string
    text: string
    sortOrder: number
    createdAt?: Date | string
    options?: AuditOptionCreateNestedManyWithoutQuestionInput
    answers?: AuditAnswerCreateNestedManyWithoutQuestionInput
  }

  export type AuditQuestionUncheckedCreateWithoutSectionInput = {
    id?: string
    code: string
    text: string
    sortOrder: number
    createdAt?: Date | string
    options?: AuditOptionUncheckedCreateNestedManyWithoutQuestionInput
    answers?: AuditAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type AuditQuestionCreateOrConnectWithoutSectionInput = {
    where: AuditQuestionWhereUniqueInput
    create: XOR<AuditQuestionCreateWithoutSectionInput, AuditQuestionUncheckedCreateWithoutSectionInput>
  }

  export type AuditQuestionCreateManySectionInputEnvelope = {
    data: AuditQuestionCreateManySectionInput | AuditQuestionCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type AuditTemplateUpsertWithoutSectionsInput = {
    update: XOR<AuditTemplateUpdateWithoutSectionsInput, AuditTemplateUncheckedUpdateWithoutSectionsInput>
    create: XOR<AuditTemplateCreateWithoutSectionsInput, AuditTemplateUncheckedCreateWithoutSectionsInput>
    where?: AuditTemplateWhereInput
  }

  export type AuditTemplateUpdateToOneWithWhereWithoutSectionsInput = {
    where?: AuditTemplateWhereInput
    data: XOR<AuditTemplateUpdateWithoutSectionsInput, AuditTemplateUncheckedUpdateWithoutSectionsInput>
  }

  export type AuditTemplateUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    maxScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: AuditSessionUpdateManyWithoutTemplateNestedInput
  }

  export type AuditTemplateUncheckedUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    maxScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: AuditSessionUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type AuditQuestionUpsertWithWhereUniqueWithoutSectionInput = {
    where: AuditQuestionWhereUniqueInput
    update: XOR<AuditQuestionUpdateWithoutSectionInput, AuditQuestionUncheckedUpdateWithoutSectionInput>
    create: XOR<AuditQuestionCreateWithoutSectionInput, AuditQuestionUncheckedCreateWithoutSectionInput>
  }

  export type AuditQuestionUpdateWithWhereUniqueWithoutSectionInput = {
    where: AuditQuestionWhereUniqueInput
    data: XOR<AuditQuestionUpdateWithoutSectionInput, AuditQuestionUncheckedUpdateWithoutSectionInput>
  }

  export type AuditQuestionUpdateManyWithWhereWithoutSectionInput = {
    where: AuditQuestionScalarWhereInput
    data: XOR<AuditQuestionUpdateManyMutationInput, AuditQuestionUncheckedUpdateManyWithoutSectionInput>
  }

  export type AuditQuestionScalarWhereInput = {
    AND?: AuditQuestionScalarWhereInput | AuditQuestionScalarWhereInput[]
    OR?: AuditQuestionScalarWhereInput[]
    NOT?: AuditQuestionScalarWhereInput | AuditQuestionScalarWhereInput[]
    id?: StringFilter<"AuditQuestion"> | string
    sectionId?: StringFilter<"AuditQuestion"> | string
    code?: StringFilter<"AuditQuestion"> | string
    text?: StringFilter<"AuditQuestion"> | string
    sortOrder?: IntFilter<"AuditQuestion"> | number
    createdAt?: DateTimeFilter<"AuditQuestion"> | Date | string
  }

  export type AuditSectionCreateWithoutQuestionsInput = {
    id?: string
    code: string
    title: string
    sortOrder: number
    maxScore: number
    createdAt?: Date | string
    template: AuditTemplateCreateNestedOneWithoutSectionsInput
  }

  export type AuditSectionUncheckedCreateWithoutQuestionsInput = {
    id?: string
    templateId: string
    code: string
    title: string
    sortOrder: number
    maxScore: number
    createdAt?: Date | string
  }

  export type AuditSectionCreateOrConnectWithoutQuestionsInput = {
    where: AuditSectionWhereUniqueInput
    create: XOR<AuditSectionCreateWithoutQuestionsInput, AuditSectionUncheckedCreateWithoutQuestionsInput>
  }

  export type AuditOptionCreateWithoutQuestionInput = {
    id?: string
    label: string
    points: number
    sortOrder: number
    createdAt?: Date | string
    answers?: AuditAnswerCreateNestedManyWithoutOptionInput
  }

  export type AuditOptionUncheckedCreateWithoutQuestionInput = {
    id?: string
    label: string
    points: number
    sortOrder: number
    createdAt?: Date | string
    answers?: AuditAnswerUncheckedCreateNestedManyWithoutOptionInput
  }

  export type AuditOptionCreateOrConnectWithoutQuestionInput = {
    where: AuditOptionWhereUniqueInput
    create: XOR<AuditOptionCreateWithoutQuestionInput, AuditOptionUncheckedCreateWithoutQuestionInput>
  }

  export type AuditOptionCreateManyQuestionInputEnvelope = {
    data: AuditOptionCreateManyQuestionInput | AuditOptionCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type AuditAnswerCreateWithoutQuestionInput = {
    id?: string
    pointsAwarded: number
    answeredAt?: Date | string
    session: AuditSessionCreateNestedOneWithoutAnswersInput
    option: AuditOptionCreateNestedOneWithoutAnswersInput
  }

  export type AuditAnswerUncheckedCreateWithoutQuestionInput = {
    id?: string
    sessionId: string
    optionId: string
    pointsAwarded: number
    answeredAt?: Date | string
  }

  export type AuditAnswerCreateOrConnectWithoutQuestionInput = {
    where: AuditAnswerWhereUniqueInput
    create: XOR<AuditAnswerCreateWithoutQuestionInput, AuditAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AuditAnswerCreateManyQuestionInputEnvelope = {
    data: AuditAnswerCreateManyQuestionInput | AuditAnswerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type AuditSectionUpsertWithoutQuestionsInput = {
    update: XOR<AuditSectionUpdateWithoutQuestionsInput, AuditSectionUncheckedUpdateWithoutQuestionsInput>
    create: XOR<AuditSectionCreateWithoutQuestionsInput, AuditSectionUncheckedCreateWithoutQuestionsInput>
    where?: AuditSectionWhereInput
  }

  export type AuditSectionUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: AuditSectionWhereInput
    data: XOR<AuditSectionUpdateWithoutQuestionsInput, AuditSectionUncheckedUpdateWithoutQuestionsInput>
  }

  export type AuditSectionUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: AuditTemplateUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type AuditSectionUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditOptionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AuditOptionWhereUniqueInput
    update: XOR<AuditOptionUpdateWithoutQuestionInput, AuditOptionUncheckedUpdateWithoutQuestionInput>
    create: XOR<AuditOptionCreateWithoutQuestionInput, AuditOptionUncheckedCreateWithoutQuestionInput>
  }

  export type AuditOptionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AuditOptionWhereUniqueInput
    data: XOR<AuditOptionUpdateWithoutQuestionInput, AuditOptionUncheckedUpdateWithoutQuestionInput>
  }

  export type AuditOptionUpdateManyWithWhereWithoutQuestionInput = {
    where: AuditOptionScalarWhereInput
    data: XOR<AuditOptionUpdateManyMutationInput, AuditOptionUncheckedUpdateManyWithoutQuestionInput>
  }

  export type AuditOptionScalarWhereInput = {
    AND?: AuditOptionScalarWhereInput | AuditOptionScalarWhereInput[]
    OR?: AuditOptionScalarWhereInput[]
    NOT?: AuditOptionScalarWhereInput | AuditOptionScalarWhereInput[]
    id?: StringFilter<"AuditOption"> | string
    questionId?: StringFilter<"AuditOption"> | string
    label?: StringFilter<"AuditOption"> | string
    points?: IntFilter<"AuditOption"> | number
    sortOrder?: IntFilter<"AuditOption"> | number
    createdAt?: DateTimeFilter<"AuditOption"> | Date | string
  }

  export type AuditAnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AuditAnswerWhereUniqueInput
    update: XOR<AuditAnswerUpdateWithoutQuestionInput, AuditAnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<AuditAnswerCreateWithoutQuestionInput, AuditAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AuditAnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AuditAnswerWhereUniqueInput
    data: XOR<AuditAnswerUpdateWithoutQuestionInput, AuditAnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type AuditAnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: AuditAnswerScalarWhereInput
    data: XOR<AuditAnswerUpdateManyMutationInput, AuditAnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type AuditAnswerScalarWhereInput = {
    AND?: AuditAnswerScalarWhereInput | AuditAnswerScalarWhereInput[]
    OR?: AuditAnswerScalarWhereInput[]
    NOT?: AuditAnswerScalarWhereInput | AuditAnswerScalarWhereInput[]
    id?: StringFilter<"AuditAnswer"> | string
    sessionId?: StringFilter<"AuditAnswer"> | string
    questionId?: StringFilter<"AuditAnswer"> | string
    optionId?: StringFilter<"AuditAnswer"> | string
    pointsAwarded?: IntFilter<"AuditAnswer"> | number
    answeredAt?: DateTimeFilter<"AuditAnswer"> | Date | string
  }

  export type AuditQuestionCreateWithoutOptionsInput = {
    id?: string
    code: string
    text: string
    sortOrder: number
    createdAt?: Date | string
    section: AuditSectionCreateNestedOneWithoutQuestionsInput
    answers?: AuditAnswerCreateNestedManyWithoutQuestionInput
  }

  export type AuditQuestionUncheckedCreateWithoutOptionsInput = {
    id?: string
    sectionId: string
    code: string
    text: string
    sortOrder: number
    createdAt?: Date | string
    answers?: AuditAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type AuditQuestionCreateOrConnectWithoutOptionsInput = {
    where: AuditQuestionWhereUniqueInput
    create: XOR<AuditQuestionCreateWithoutOptionsInput, AuditQuestionUncheckedCreateWithoutOptionsInput>
  }

  export type AuditAnswerCreateWithoutOptionInput = {
    id?: string
    pointsAwarded: number
    answeredAt?: Date | string
    session: AuditSessionCreateNestedOneWithoutAnswersInput
    question: AuditQuestionCreateNestedOneWithoutAnswersInput
  }

  export type AuditAnswerUncheckedCreateWithoutOptionInput = {
    id?: string
    sessionId: string
    questionId: string
    pointsAwarded: number
    answeredAt?: Date | string
  }

  export type AuditAnswerCreateOrConnectWithoutOptionInput = {
    where: AuditAnswerWhereUniqueInput
    create: XOR<AuditAnswerCreateWithoutOptionInput, AuditAnswerUncheckedCreateWithoutOptionInput>
  }

  export type AuditAnswerCreateManyOptionInputEnvelope = {
    data: AuditAnswerCreateManyOptionInput | AuditAnswerCreateManyOptionInput[]
    skipDuplicates?: boolean
  }

  export type AuditQuestionUpsertWithoutOptionsInput = {
    update: XOR<AuditQuestionUpdateWithoutOptionsInput, AuditQuestionUncheckedUpdateWithoutOptionsInput>
    create: XOR<AuditQuestionCreateWithoutOptionsInput, AuditQuestionUncheckedCreateWithoutOptionsInput>
    where?: AuditQuestionWhereInput
  }

  export type AuditQuestionUpdateToOneWithWhereWithoutOptionsInput = {
    where?: AuditQuestionWhereInput
    data: XOR<AuditQuestionUpdateWithoutOptionsInput, AuditQuestionUncheckedUpdateWithoutOptionsInput>
  }

  export type AuditQuestionUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    section?: AuditSectionUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: AuditAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type AuditQuestionUncheckedUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AuditAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type AuditAnswerUpsertWithWhereUniqueWithoutOptionInput = {
    where: AuditAnswerWhereUniqueInput
    update: XOR<AuditAnswerUpdateWithoutOptionInput, AuditAnswerUncheckedUpdateWithoutOptionInput>
    create: XOR<AuditAnswerCreateWithoutOptionInput, AuditAnswerUncheckedCreateWithoutOptionInput>
  }

  export type AuditAnswerUpdateWithWhereUniqueWithoutOptionInput = {
    where: AuditAnswerWhereUniqueInput
    data: XOR<AuditAnswerUpdateWithoutOptionInput, AuditAnswerUncheckedUpdateWithoutOptionInput>
  }

  export type AuditAnswerUpdateManyWithWhereWithoutOptionInput = {
    where: AuditAnswerScalarWhereInput
    data: XOR<AuditAnswerUpdateManyMutationInput, AuditAnswerUncheckedUpdateManyWithoutOptionInput>
  }

  export type AuditTemplateCreateWithoutSessionsInput = {
    id?: string
    name: string
    version: number
    isActive?: boolean
    maxScore: number
    createdAt?: Date | string
    sections?: AuditSectionCreateNestedManyWithoutTemplateInput
  }

  export type AuditTemplateUncheckedCreateWithoutSessionsInput = {
    id?: string
    name: string
    version: number
    isActive?: boolean
    maxScore: number
    createdAt?: Date | string
    sections?: AuditSectionUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type AuditTemplateCreateOrConnectWithoutSessionsInput = {
    where: AuditTemplateWhereUniqueInput
    create: XOR<AuditTemplateCreateWithoutSessionsInput, AuditTemplateUncheckedCreateWithoutSessionsInput>
  }

  export type AuditAnswerCreateWithoutSessionInput = {
    id?: string
    pointsAwarded: number
    answeredAt?: Date | string
    question: AuditQuestionCreateNestedOneWithoutAnswersInput
    option: AuditOptionCreateNestedOneWithoutAnswersInput
  }

  export type AuditAnswerUncheckedCreateWithoutSessionInput = {
    id?: string
    questionId: string
    optionId: string
    pointsAwarded: number
    answeredAt?: Date | string
  }

  export type AuditAnswerCreateOrConnectWithoutSessionInput = {
    where: AuditAnswerWhereUniqueInput
    create: XOR<AuditAnswerCreateWithoutSessionInput, AuditAnswerUncheckedCreateWithoutSessionInput>
  }

  export type AuditAnswerCreateManySessionInputEnvelope = {
    data: AuditAnswerCreateManySessionInput | AuditAnswerCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type AuditResultCreateWithoutSessionInput = {
    id?: string
    totalScore: number
    maxScore: number
    tier: string
    message: string
    sectionScores: JsonNullValueInput | InputJsonValue
    locked?: boolean
    calculatedAt?: Date | string
  }

  export type AuditResultUncheckedCreateWithoutSessionInput = {
    id?: string
    totalScore: number
    maxScore: number
    tier: string
    message: string
    sectionScores: JsonNullValueInput | InputJsonValue
    locked?: boolean
    calculatedAt?: Date | string
  }

  export type AuditResultCreateOrConnectWithoutSessionInput = {
    where: AuditResultWhereUniqueInput
    create: XOR<AuditResultCreateWithoutSessionInput, AuditResultUncheckedCreateWithoutSessionInput>
  }

  export type AuditLeadCreateWithoutSessionInput = {
    id?: string
    fullName: string
    email: string
    phone?: string | null
    companyName?: string | null
    position?: string | null
    createdAt?: Date | string
  }

  export type AuditLeadUncheckedCreateWithoutSessionInput = {
    id?: string
    fullName: string
    email: string
    phone?: string | null
    companyName?: string | null
    position?: string | null
    createdAt?: Date | string
  }

  export type AuditLeadCreateOrConnectWithoutSessionInput = {
    where: AuditLeadWhereUniqueInput
    create: XOR<AuditLeadCreateWithoutSessionInput, AuditLeadUncheckedCreateWithoutSessionInput>
  }

  export type AuditTemplateUpsertWithoutSessionsInput = {
    update: XOR<AuditTemplateUpdateWithoutSessionsInput, AuditTemplateUncheckedUpdateWithoutSessionsInput>
    create: XOR<AuditTemplateCreateWithoutSessionsInput, AuditTemplateUncheckedCreateWithoutSessionsInput>
    where?: AuditTemplateWhereInput
  }

  export type AuditTemplateUpdateToOneWithWhereWithoutSessionsInput = {
    where?: AuditTemplateWhereInput
    data: XOR<AuditTemplateUpdateWithoutSessionsInput, AuditTemplateUncheckedUpdateWithoutSessionsInput>
  }

  export type AuditTemplateUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    maxScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: AuditSectionUpdateManyWithoutTemplateNestedInput
  }

  export type AuditTemplateUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    maxScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: AuditSectionUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type AuditAnswerUpsertWithWhereUniqueWithoutSessionInput = {
    where: AuditAnswerWhereUniqueInput
    update: XOR<AuditAnswerUpdateWithoutSessionInput, AuditAnswerUncheckedUpdateWithoutSessionInput>
    create: XOR<AuditAnswerCreateWithoutSessionInput, AuditAnswerUncheckedCreateWithoutSessionInput>
  }

  export type AuditAnswerUpdateWithWhereUniqueWithoutSessionInput = {
    where: AuditAnswerWhereUniqueInput
    data: XOR<AuditAnswerUpdateWithoutSessionInput, AuditAnswerUncheckedUpdateWithoutSessionInput>
  }

  export type AuditAnswerUpdateManyWithWhereWithoutSessionInput = {
    where: AuditAnswerScalarWhereInput
    data: XOR<AuditAnswerUpdateManyMutationInput, AuditAnswerUncheckedUpdateManyWithoutSessionInput>
  }

  export type AuditResultUpsertWithoutSessionInput = {
    update: XOR<AuditResultUpdateWithoutSessionInput, AuditResultUncheckedUpdateWithoutSessionInput>
    create: XOR<AuditResultCreateWithoutSessionInput, AuditResultUncheckedCreateWithoutSessionInput>
    where?: AuditResultWhereInput
  }

  export type AuditResultUpdateToOneWithWhereWithoutSessionInput = {
    where?: AuditResultWhereInput
    data: XOR<AuditResultUpdateWithoutSessionInput, AuditResultUncheckedUpdateWithoutSessionInput>
  }

  export type AuditResultUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalScore?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    tier?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sectionScores?: JsonNullValueInput | InputJsonValue
    locked?: BoolFieldUpdateOperationsInput | boolean
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditResultUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalScore?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    tier?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sectionScores?: JsonNullValueInput | InputJsonValue
    locked?: BoolFieldUpdateOperationsInput | boolean
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLeadUpsertWithoutSessionInput = {
    update: XOR<AuditLeadUpdateWithoutSessionInput, AuditLeadUncheckedUpdateWithoutSessionInput>
    create: XOR<AuditLeadCreateWithoutSessionInput, AuditLeadUncheckedCreateWithoutSessionInput>
    where?: AuditLeadWhereInput
  }

  export type AuditLeadUpdateToOneWithWhereWithoutSessionInput = {
    where?: AuditLeadWhereInput
    data: XOR<AuditLeadUpdateWithoutSessionInput, AuditLeadUncheckedUpdateWithoutSessionInput>
  }

  export type AuditLeadUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLeadUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditSessionCreateWithoutAnswersInput = {
    id?: string
    status?: $Enums.SessionStatus
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    template: AuditTemplateCreateNestedOneWithoutSessionsInput
    result?: AuditResultCreateNestedOneWithoutSessionInput
    lead?: AuditLeadCreateNestedOneWithoutSessionInput
  }

  export type AuditSessionUncheckedCreateWithoutAnswersInput = {
    id?: string
    templateId: string
    status?: $Enums.SessionStatus
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    result?: AuditResultUncheckedCreateNestedOneWithoutSessionInput
    lead?: AuditLeadUncheckedCreateNestedOneWithoutSessionInput
  }

  export type AuditSessionCreateOrConnectWithoutAnswersInput = {
    where: AuditSessionWhereUniqueInput
    create: XOR<AuditSessionCreateWithoutAnswersInput, AuditSessionUncheckedCreateWithoutAnswersInput>
  }

  export type AuditQuestionCreateWithoutAnswersInput = {
    id?: string
    code: string
    text: string
    sortOrder: number
    createdAt?: Date | string
    section: AuditSectionCreateNestedOneWithoutQuestionsInput
    options?: AuditOptionCreateNestedManyWithoutQuestionInput
  }

  export type AuditQuestionUncheckedCreateWithoutAnswersInput = {
    id?: string
    sectionId: string
    code: string
    text: string
    sortOrder: number
    createdAt?: Date | string
    options?: AuditOptionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type AuditQuestionCreateOrConnectWithoutAnswersInput = {
    where: AuditQuestionWhereUniqueInput
    create: XOR<AuditQuestionCreateWithoutAnswersInput, AuditQuestionUncheckedCreateWithoutAnswersInput>
  }

  export type AuditOptionCreateWithoutAnswersInput = {
    id?: string
    label: string
    points: number
    sortOrder: number
    createdAt?: Date | string
    question: AuditQuestionCreateNestedOneWithoutOptionsInput
  }

  export type AuditOptionUncheckedCreateWithoutAnswersInput = {
    id?: string
    questionId: string
    label: string
    points: number
    sortOrder: number
    createdAt?: Date | string
  }

  export type AuditOptionCreateOrConnectWithoutAnswersInput = {
    where: AuditOptionWhereUniqueInput
    create: XOR<AuditOptionCreateWithoutAnswersInput, AuditOptionUncheckedCreateWithoutAnswersInput>
  }

  export type AuditSessionUpsertWithoutAnswersInput = {
    update: XOR<AuditSessionUpdateWithoutAnswersInput, AuditSessionUncheckedUpdateWithoutAnswersInput>
    create: XOR<AuditSessionCreateWithoutAnswersInput, AuditSessionUncheckedCreateWithoutAnswersInput>
    where?: AuditSessionWhereInput
  }

  export type AuditSessionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: AuditSessionWhereInput
    data: XOR<AuditSessionUpdateWithoutAnswersInput, AuditSessionUncheckedUpdateWithoutAnswersInput>
  }

  export type AuditSessionUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: AuditTemplateUpdateOneRequiredWithoutSessionsNestedInput
    result?: AuditResultUpdateOneWithoutSessionNestedInput
    lead?: AuditLeadUpdateOneWithoutSessionNestedInput
  }

  export type AuditSessionUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: AuditResultUncheckedUpdateOneWithoutSessionNestedInput
    lead?: AuditLeadUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type AuditQuestionUpsertWithoutAnswersInput = {
    update: XOR<AuditQuestionUpdateWithoutAnswersInput, AuditQuestionUncheckedUpdateWithoutAnswersInput>
    create: XOR<AuditQuestionCreateWithoutAnswersInput, AuditQuestionUncheckedCreateWithoutAnswersInput>
    where?: AuditQuestionWhereInput
  }

  export type AuditQuestionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: AuditQuestionWhereInput
    data: XOR<AuditQuestionUpdateWithoutAnswersInput, AuditQuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type AuditQuestionUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    section?: AuditSectionUpdateOneRequiredWithoutQuestionsNestedInput
    options?: AuditOptionUpdateManyWithoutQuestionNestedInput
  }

  export type AuditQuestionUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: AuditOptionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type AuditOptionUpsertWithoutAnswersInput = {
    update: XOR<AuditOptionUpdateWithoutAnswersInput, AuditOptionUncheckedUpdateWithoutAnswersInput>
    create: XOR<AuditOptionCreateWithoutAnswersInput, AuditOptionUncheckedCreateWithoutAnswersInput>
    where?: AuditOptionWhereInput
  }

  export type AuditOptionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: AuditOptionWhereInput
    data: XOR<AuditOptionUpdateWithoutAnswersInput, AuditOptionUncheckedUpdateWithoutAnswersInput>
  }

  export type AuditOptionUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: AuditQuestionUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type AuditOptionUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditSessionCreateWithoutResultInput = {
    id?: string
    status?: $Enums.SessionStatus
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    template: AuditTemplateCreateNestedOneWithoutSessionsInput
    answers?: AuditAnswerCreateNestedManyWithoutSessionInput
    lead?: AuditLeadCreateNestedOneWithoutSessionInput
  }

  export type AuditSessionUncheckedCreateWithoutResultInput = {
    id?: string
    templateId: string
    status?: $Enums.SessionStatus
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    answers?: AuditAnswerUncheckedCreateNestedManyWithoutSessionInput
    lead?: AuditLeadUncheckedCreateNestedOneWithoutSessionInput
  }

  export type AuditSessionCreateOrConnectWithoutResultInput = {
    where: AuditSessionWhereUniqueInput
    create: XOR<AuditSessionCreateWithoutResultInput, AuditSessionUncheckedCreateWithoutResultInput>
  }

  export type AuditSessionUpsertWithoutResultInput = {
    update: XOR<AuditSessionUpdateWithoutResultInput, AuditSessionUncheckedUpdateWithoutResultInput>
    create: XOR<AuditSessionCreateWithoutResultInput, AuditSessionUncheckedCreateWithoutResultInput>
    where?: AuditSessionWhereInput
  }

  export type AuditSessionUpdateToOneWithWhereWithoutResultInput = {
    where?: AuditSessionWhereInput
    data: XOR<AuditSessionUpdateWithoutResultInput, AuditSessionUncheckedUpdateWithoutResultInput>
  }

  export type AuditSessionUpdateWithoutResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: AuditTemplateUpdateOneRequiredWithoutSessionsNestedInput
    answers?: AuditAnswerUpdateManyWithoutSessionNestedInput
    lead?: AuditLeadUpdateOneWithoutSessionNestedInput
  }

  export type AuditSessionUncheckedUpdateWithoutResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AuditAnswerUncheckedUpdateManyWithoutSessionNestedInput
    lead?: AuditLeadUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type AuditSessionCreateWithoutLeadInput = {
    id?: string
    status?: $Enums.SessionStatus
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    template: AuditTemplateCreateNestedOneWithoutSessionsInput
    answers?: AuditAnswerCreateNestedManyWithoutSessionInput
    result?: AuditResultCreateNestedOneWithoutSessionInput
  }

  export type AuditSessionUncheckedCreateWithoutLeadInput = {
    id?: string
    templateId: string
    status?: $Enums.SessionStatus
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    answers?: AuditAnswerUncheckedCreateNestedManyWithoutSessionInput
    result?: AuditResultUncheckedCreateNestedOneWithoutSessionInput
  }

  export type AuditSessionCreateOrConnectWithoutLeadInput = {
    where: AuditSessionWhereUniqueInput
    create: XOR<AuditSessionCreateWithoutLeadInput, AuditSessionUncheckedCreateWithoutLeadInput>
  }

  export type AuditSessionUpsertWithoutLeadInput = {
    update: XOR<AuditSessionUpdateWithoutLeadInput, AuditSessionUncheckedUpdateWithoutLeadInput>
    create: XOR<AuditSessionCreateWithoutLeadInput, AuditSessionUncheckedCreateWithoutLeadInput>
    where?: AuditSessionWhereInput
  }

  export type AuditSessionUpdateToOneWithWhereWithoutLeadInput = {
    where?: AuditSessionWhereInput
    data: XOR<AuditSessionUpdateWithoutLeadInput, AuditSessionUncheckedUpdateWithoutLeadInput>
  }

  export type AuditSessionUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: AuditTemplateUpdateOneRequiredWithoutSessionsNestedInput
    answers?: AuditAnswerUpdateManyWithoutSessionNestedInput
    result?: AuditResultUpdateOneWithoutSessionNestedInput
  }

  export type AuditSessionUncheckedUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AuditAnswerUncheckedUpdateManyWithoutSessionNestedInput
    result?: AuditResultUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type AuditSectionCreateManyTemplateInput = {
    id?: string
    code: string
    title: string
    sortOrder: number
    maxScore: number
    createdAt?: Date | string
  }

  export type AuditSessionCreateManyTemplateInput = {
    id?: string
    status?: $Enums.SessionStatus
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type AuditSectionUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: AuditQuestionUpdateManyWithoutSectionNestedInput
  }

  export type AuditSectionUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: AuditQuestionUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type AuditSectionUncheckedUpdateManyWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditSessionUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AuditAnswerUpdateManyWithoutSessionNestedInput
    result?: AuditResultUpdateOneWithoutSessionNestedInput
    lead?: AuditLeadUpdateOneWithoutSessionNestedInput
  }

  export type AuditSessionUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AuditAnswerUncheckedUpdateManyWithoutSessionNestedInput
    result?: AuditResultUncheckedUpdateOneWithoutSessionNestedInput
    lead?: AuditLeadUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type AuditSessionUncheckedUpdateManyWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditQuestionCreateManySectionInput = {
    id?: string
    code: string
    text: string
    sortOrder: number
    createdAt?: Date | string
  }

  export type AuditQuestionUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: AuditOptionUpdateManyWithoutQuestionNestedInput
    answers?: AuditAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type AuditQuestionUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: AuditOptionUncheckedUpdateManyWithoutQuestionNestedInput
    answers?: AuditAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type AuditQuestionUncheckedUpdateManyWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditOptionCreateManyQuestionInput = {
    id?: string
    label: string
    points: number
    sortOrder: number
    createdAt?: Date | string
  }

  export type AuditAnswerCreateManyQuestionInput = {
    id?: string
    sessionId: string
    optionId: string
    pointsAwarded: number
    answeredAt?: Date | string
  }

  export type AuditOptionUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AuditAnswerUpdateManyWithoutOptionNestedInput
  }

  export type AuditOptionUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AuditAnswerUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type AuditOptionUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditAnswerUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: AuditSessionUpdateOneRequiredWithoutAnswersNestedInput
    option?: AuditOptionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AuditAnswerUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditAnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditAnswerCreateManyOptionInput = {
    id?: string
    sessionId: string
    questionId: string
    pointsAwarded: number
    answeredAt?: Date | string
  }

  export type AuditAnswerUpdateWithoutOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: AuditSessionUpdateOneRequiredWithoutAnswersNestedInput
    question?: AuditQuestionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AuditAnswerUncheckedUpdateWithoutOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditAnswerUncheckedUpdateManyWithoutOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditAnswerCreateManySessionInput = {
    id?: string
    questionId: string
    optionId: string
    pointsAwarded: number
    answeredAt?: Date | string
  }

  export type AuditAnswerUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: AuditQuestionUpdateOneRequiredWithoutAnswersNestedInput
    option?: AuditOptionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AuditAnswerUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditAnswerUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    answeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}