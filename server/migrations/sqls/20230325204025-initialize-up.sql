CREATE TABLE if not exists fixtures (
                                        fixture_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                                        home_team VARCHAR(100) NOT NULL,
    away_team VARCHAR(100) NOT NULL,
    "result" VARCHAR(10) NOT NULL,
    week_id INTEGER
    );

CREATE TABLE if not exists predictions (
                                           prediction_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                                           prediction VARCHAR(100),
    fixture_id INTEGER,
    user_id INTEGER
    );

CREATE TABLE if not exists league_one_table (
                                              league_one_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                                              team VARCHAR(500) NOT NULL,
    matches_played INTEGER,
    wins INTEGER,
    draws INTEGER,
    losses INTEGER,
    "for" INTEGER,
    against INTEGER,
    goal_difference INTEGER,
    points INTEGER
    );

CREATE TABLE if not exists users (
                                     user_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                                     username VARCHAR(500),
    password VARCHAR(500)
    );

CREATE TABLE if not exists weekly_fixtures (
                                              week_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                                              week INTEGER NOT NULL
);

ALTER TABLE if EXISTS predictions ADD FOREIGN KEY (fixture_id) REFERENCES fixtures(fixture_id);
ALTER TABLE if EXISTS predictions ADD FOREIGN KEY (user_id) REFERENCES users(user_id);
ALTER TABLE if EXISTS fixtures ADD FOREIGN KEY (week_id) REFERENCES weekly_fixtures(week_id);

insert into league_one_table (team, matches_played, wins, draws, losses, "for", against, goal_difference, points)
values ('Plymouth Argyle', 0, 0, 0, 0, 0, 0, 0, 0);

insert into league_one_table (team, matches_played, wins, draws, losses, "for", against, goal_difference, points)
values ('Derby', 0, 0, 0, 0, 0, 0, 0, 0);
