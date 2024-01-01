BEGIN;

INSERT INTO "list" ("name", "position") VALUES
    ('To Do', 1),
    ('In Progress', 2),
    ('Done', 3);

INSERT INTO "card" ("title", "position", "list_id") VALUES
    ('Implement User Authentication', 1, 1),
    ('Deploy to Production', 2, 1),
    ('Write Test Cases', 1, 2),
    ('Develop Backend API', 2, 2),
    ('Create UI Mockups', 1, 3),
    ('Design Database Schema', 2, 3);

INSERT INTO "tag" ("name", "color") VALUES
    ('Frontend', 'Blue'),
    ('Backend', 'Green'),
    ('Database', 'Purple'),
    ('Testing', 'Orange'),
    ('Deployment', 'Red');


-- Associate tags with the card "Implement User Authentication"
INSERT INTO "card_has_tag" ("card_id", "tag_id") VALUES
    (1, 1),
    (1, 2);

-- Associate tags with the card "Deploy to Production"
INSERT INTO "card_has_tag" ("card_id", "tag_id") VALUES
    (2, 3),
    (2, 5);

-- Associate tags with the card "Write Test Cases"
INSERT INTO "card_has_tag" ("card_id", "tag_id") VALUES
    (3, 1),
    (3, 4);


COMMIT;