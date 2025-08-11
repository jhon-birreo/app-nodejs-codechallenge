-- This is an empty migration.
-- populate data to transfer_types table    
INSERT INTO "public"."transfer_types" (name, description, "createdAt", "updatedAt")
VALUES
  ('VISA', 'Visa credit card', CURRENT_TIMESTAMP, null),
  ('MASTERCARD', 'Mastercard credit card', CURRENT_TIMESTAMP, null),
  ('AMERICAN_EXPRESS', 'American Express credit card', CURRENT_TIMESTAMP, null),
  ('DISCOVER', 'Discover credit card', CURRENT_TIMESTAMP, null);