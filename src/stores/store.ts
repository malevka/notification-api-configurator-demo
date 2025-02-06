import { makeAutoObservable } from "mobx";

interface StoreData {
  title: string;
  body?: string;
  badge?: string;
  icon?: string;
  image?: string;
  tag?: string;
}
export type Field = keyof StoreData;
type Options = Omit<StoreData, "title">;

class ParamsStore {
  data: StoreData = { title: "" };
  /* title = "";
  body = "";
  badge = "";
  icon = "";
  image = "";
  tag = ""; */
  constructor() {
    makeAutoObservable(this);
  }
  setField<T extends Field>(this: ParamsStore, name: T, value: StoreData[T]) {
    this.data[name] = value;
  }
  get title() {
    return this.data.title;
  }
  get options(): Options | null {
    let result: Options | null = null;

    for (const key in this.data) {
      const typedKey = key as Field;
      if (typedKey !== "title" && this.data[typedKey]) {
        if (!result) result = { [typedKey]: this.data[typedKey] };
        else result[typedKey] = this.data[typedKey];
      }
    }
    return result;
  }
}

const store = new ParamsStore();
export { store };
