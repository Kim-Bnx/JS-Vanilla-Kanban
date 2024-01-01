const Card = require('./Card');
const List = require('./List');
const Tag = require('./Tag');

List.hasMany(Card, {
    foreignKey: "list_id",
    as: "cards"
});

Card.belongsTo(List, {
    foreignKey: "list_id",
    as: "list"
});

Card.belongsToMany(Tag, {
    through: "card_has_tag",
    foreignKey: "card_id",
    otherKey: 'tag_id',
    as: "tags",
    updatedAt: false
});

Tag.belongsToMany(Card, {
    through: "card_has_tag",
    foreignKey: "tag_id",
    otherKey: 'card_id',
    as: "cards",
    updatedAt: false
})

module.exports = { Card, List, Tag };