"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const Post_1 = require("./entities/Post");
const mikro_orm_config_1 = __importDefault(require("./mikro-orm.config"));
const main = async () => {
    const orm = await core_1.MikroORM.init(mikro_orm_config_1.default);
    const post = orm.em.create(Post_1.Post);
    await orm.em.persistAndFlush(post);
    console.log('-----------sql2---------');
    await orm.em.nativeInsert(Post_1.Post);
};
main().catch((error) => {
    console.log(error);
});
console.log('app run successfully');
//# sourceMappingURL=index.js.map