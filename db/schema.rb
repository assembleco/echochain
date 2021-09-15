# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_09_15_193525) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "people", force: :cascade do |t|
    t.string "handle"
    t.string "email"
    t.string "name"
    t.string "locale"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "relays", force: :cascade do |t|
    t.bigint "person_id", null: false
    t.string "name"
    t.datetime "disposed"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["person_id"], name: "index_relays_on_person_id"
  end

  create_table "sessions", force: :cascade do |t|
    t.bigint "person_id", null: false
    t.datetime "claimed"
    t.datetime "expires"
    t.uuid "code"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["person_id"], name: "index_sessions_on_person_id"
  end

  create_table "signs", force: :cascade do |t|
    t.bigint "relay_id", null: false
    t.text "body"
    t.datetime "recalled"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "name", null: false
    t.index ["relay_id"], name: "index_signs_on_relay_id"
  end

  add_foreign_key "relays", "people"
  add_foreign_key "sessions", "people"
  add_foreign_key "signs", "relays"
end
