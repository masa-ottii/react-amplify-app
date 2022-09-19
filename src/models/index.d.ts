import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type KijiMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Kiji {
  readonly id: string;
  readonly title?: string | null;
  readonly body?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Kiji, KijiMetaData>);
  static copyOf(source: Kiji, mutator: (draft: MutableModel<Kiji, KijiMetaData>) => MutableModel<Kiji, KijiMetaData> | void): Kiji;
}