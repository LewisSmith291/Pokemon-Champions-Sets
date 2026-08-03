CREATE TABLE "pokemon_set" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"species" text NOT NULL,
	"form" text NOT NULL,
	"gender" text NOT NULL,
	"ability" text NOT NULL,
	"nature" text NOT NULL,
	"item" text,
	"boost_hp" integer DEFAULT 0 NOT NULL,
	"boost_atk" integer DEFAULT 0 NOT NULL,
	"boost_def" integer DEFAULT 0 NOT NULL,
	"boost_sp_atk" integer DEFAULT 0 NOT NULL,
	"boost_sp_def" integer DEFAULT 0 NOT NULL,
	"boost_spe" integer DEFAULT 0 NOT NULL,
	"is_public" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "set_boost_per_stat" CHECK ("pokemon_set"."boost_hp" between 0 and 32
      and "pokemon_set"."boost_atk" between 0 and 32
      and "pokemon_set"."boost_def" between 0 and 32
      and "pokemon_set"."boost_sp_atk" between 0 and 32
      and "pokemon_set"."boost_sp_def" between 0 and 32
      and "pokemon_set"."boost_spe" between 0 and 32),
	CONSTRAINT "set_boost_total" CHECK ("pokemon_set"."boost_hp" + "pokemon_set"."boost_atk" + "pokemon_set"."boost_def"
        + "pokemon_set"."boost_sp_atk" + "pokemon_set"."boost_sp_def" + "pokemon_set"."boost_spe" <= 66)
);
--> statement-breakpoint
CREATE TABLE "set_moves" (
	"set_id" text NOT NULL,
	"slot" integer NOT NULL,
	"move" text NOT NULL,
	CONSTRAINT "set_moves_set_id_slot_pk" PRIMARY KEY("set_id","slot"),
	CONSTRAINT "set_moves_slot" CHECK ("set_moves"."slot" between 1 and 4)
);
--> statement-breakpoint
ALTER TABLE "pokemon_set" ADD CONSTRAINT "pokemon_set_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "set_moves" ADD CONSTRAINT "set_moves_set_id_pokemon_set_id_fk" FOREIGN KEY ("set_id") REFERENCES "public"."pokemon_set"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "set_userId_idx" ON "pokemon_set" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "set_species_idx" ON "pokemon_set" USING btree ("species");--> statement-breakpoint
CREATE INDEX "set_public_created_idx" ON "pokemon_set" USING btree ("is_public","created_at");--> statement-breakpoint
CREATE INDEX "set_moves_move_idx" ON "set_moves" USING btree ("move");