CREATE TABLE "set_votes" (
	"set_id" text NOT NULL,
	"user_id" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "set_votes_set_id_user_id_pk" PRIMARY KEY("set_id","user_id")
);
--> statement-breakpoint
ALTER TABLE "set_votes" ADD CONSTRAINT "set_votes_set_id_pokemon_set_id_fk" FOREIGN KEY ("set_id") REFERENCES "public"."pokemon_set"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "set_votes" ADD CONSTRAINT "set_votes_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "set_votes_set_idx" ON "set_votes" USING btree ("set_id");