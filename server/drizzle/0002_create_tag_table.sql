CREATE TABLE "set_tags" (
	"set_id" text NOT NULL,
	"tag" text NOT NULL,
	CONSTRAINT "set_tags_set_id_tag_pk" PRIMARY KEY("set_id","tag")
);
--> statement-breakpoint
ALTER TABLE "set_tags" ADD CONSTRAINT "set_tags_set_id_pokemon_set_id_fk" FOREIGN KEY ("set_id") REFERENCES "public"."pokemon_set"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "set_tags_tag_idx" ON "set_tags" USING btree ("tag");