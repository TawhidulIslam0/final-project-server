# Assignment 4 - Crud-Application 

## Name  
Tawhidul Islam

## GitHub Username  
TawhidulIslam0

## Repository  
https://github.com/TawhidulIslam0/final-project-server

For running the Backend
1) Go to the backend folder path
2) Run npm start 

##  Output


Opening database connection
Server started on 5001
Database starter-server already exists
Executing (default): DROP TABLE IF EXISTS "students" CASCADE;
Executing (default): DROP TABLE IF EXISTS "campuses" CASCADE;
Executing (default): DROP TABLE IF EXISTS "campuses" CASCADE;
Executing (default): CREATE TABLE IF NOT EXISTS "campuses" ("id"   SERIAL , "name" VARCHAR(255) NOT NULL, "address" VARCHAR(255) NOT NULL, "description" VARCHAR(255), "imageURL" VARCHAR(255) DEFAULT 'https://www.ccny.cuny.edu/sites/default/files/styles/large/public/2019-08/fastfacts_fullcampus_.jpg?itok=1FltVbLw', "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, PRIMARY KEY ("id"));      
Executing (default): SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid 
AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'campuses' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;
Executing (default): DROP TABLE IF EXISTS "students" CASCADE;
Executing (default): CREATE TABLE IF NOT EXISTS "students" ("id"   SERIAL , "firstname" VARCHAR(255) NOT NULL, "lastname" VARCHAR(255) NOT NULL, "email" VARCHAR(255) NOT NULL, "imageUrl" VARCHAR(255) DEFAULT 'https://cdn-icons-png.flaticon.com/512/847/847969.png', "gpa" DECIMAL(2,1), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, "campusId" INTEGER REFERENCES "campuses" ("id") ON DELETE SET NULL ON UPDATE CASCADE, PRIMARY KEY ("id"));
Executing (default): SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid 
AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'students' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;
------Synced to db--------
Executing (default): INSERT INTO "campuses" ("id","name","address","description","imageURL","createdAt","updatedAt") VALUES (DEFAULT,$1,$2,$3,$4,$5,$6) RETURNING "id","name","address","description","imageURL","createdAt","updatedAt";
Executing (default): INSERT INTO "campuses" ("id","name","address","description","imageURL","createdAt","updatedAt") VALUES (DEFAULT,$1,$2,$3,$4,$5,$6) RETURNING "id","name","address","description","imageURL","createdAt","updatedAt";
Executing (default): INSERT INTO "campuses" ("id","name","address","description","imageURL","createdAt","updatedAt") VALUES (DEFAULT,$1,$2,$3,$4,$5,$6) RETURNING "id","name","address","description","imageURL","createdAt","updatedAt";
Executing (default): INSERT INTO "students" ("id","firstname","lastname","email","imageUrl","gpa","createdAt","updatedAt","campusId") VALUES (DEFAULT,$1,$2,$3,$4,$5,$6,$7,$8) RETURNING "id","firstname","lastname","email","imageUrl","gpa","createdAt","updatedAt","campusId";
Executing (default): INSERT INTO "students" ("id","firstname","lastname","email","imageUrl","gpa","createdAt","updatedAt","campusId") VALUES (DEFAULT,$1,$2,$3,$4,$5,$6,$7,$8) RETURNING "id","firstname","lastname","email","imageUrl","gpa","createdAt","updatedAt","campusId";
Executing (default): UPDATE "students" SET "campusId"=$1,"updatedAt"=$2 WHERE "id" = $3
--------Successfully seeded db--------
