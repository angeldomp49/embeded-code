use Appointments;

CREATE TABLE appointments(
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    appointment DATE,
    enable BOOLEAN,
    turn INT,
    name VARCHAR(255),
    email VARCHAR(255),
    phone MEDIUMINT,
    message TEXT
);