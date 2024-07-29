export type MonstersParamsType = {
  limit?: number;
  search?: string; //For example: https://api.open5e.com/monsters/?search=fir will return all monsters that contain "fir" in their names, including all monsters that include terms like "fire"
  text?: string; // For example: https://api.open5e.com/search/?text=fire will search the entire SRD for anything containing "fire"
  cr?: number; // For example, monsters can be filtered by CR. For example: api.open5e.com/monsters/?cr=3 will return all monsters with a challenge rating of 3
  ordering?: string; // For example, https://api.open5e.com/monsters/?ordering=challenge_rating will return results ordered by Challenge Rating. The API always sub-sorts by alphabetical order (so this will return CR0 creatures starting with the letter "A" first)
};

export type ActionType = {
  name: string;
  desc: string;
  attack_bonus?: number;
  damage_dice?: string;
};

export type SpeedAttributesType = {
  burrow?: number;
  swim?: number;
  walk?: number;
  climb?: number;
  fly?: number;
};

export type SpecialAbilityType = {
  name: string;
  desc: string;
};

export type SkillsType = {
  insight?: number;
  perception?: number;
  stealth?: number;
  deception?: number;
  athletics?: number;
  nature?: number;
  history?: number;
  persuasion?: number;
  arcana?: number;
  religion?: number;
  acrobatics?: number;
  intimidation?: number;
  performance?: number;
  medicine?: number;
  survival?: number;
};

export type MonsterType = {
  actions: Array<ActionType>;
  alignment: string;
  armor_class: string;
  bonus_actions?: Array<any>;
  challenge_rating: string;
  charisma: number;
  charisma_save?: any;
  condition_immunities: string;
  constitution: number;
  constitution_save?: any;
  cr: number;
  damage_immunities: string;
  damage_resistances: string;
  damage_vulnerabilities: string;
  desc: string;
  dexterity: number;
  dexterity_save?: any;
  document__license_url: string;
  document__slug: string;
  document__title: string;
  document__url: string;
  environments?: Array<any>;
  group?: any;
  hit_dice: string;
  hit_points: number;
  img_main?: string;
  intelligence: number;
  intelligence_save?: any;
  languages?: string;
  legendary_actions?: any;
  legendary_desc?: string;
  name: string;
  page_no: number;
  perception: number;
  reactions?: Array<any>;
  senses?: string;
  size: string;
  skills?: SkillsType | {};
  slug: string;
  special_abilities: Array<SpecialAbilityType>;
  speed: SpeedAttributesType;
  spell_list: Array<any>;
  strength: number;
  strength_save?: any;
  subtype?: string;
  type: string;
  wisdom: number;
  wisdom_save?: any;
};
