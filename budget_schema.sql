-- MySQL Script generated by MySQL Workbench
-- Sat Aug 26 16:28:46 2017
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema budget
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema budget
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `budget` DEFAULT CHARACTER SET utf8 ;
USE `budget` ;

-- -----------------------------------------------------
-- Table `budget`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `budget`.`user` (
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(32) NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP);


-- -----------------------------------------------------
-- Table `budget`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `budget`.`category` (
  `category_id` INT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`category_id`));


-- -----------------------------------------------------
-- Table `budget`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `budget`.`user` (
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(32) NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP);


-- -----------------------------------------------------
-- Table `budget`.`subcategory_tags`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `budget`.`subcategory_tags` (
  `subcategory_id` INT NOT NULL AUTO_INCREMENT,
  `subcategory_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`subcategory_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `budget`.`large_data`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `budget`.`large_data` (
  `data_id` INT NOT NULL,
  `upload` BLOB NULL,
  `date` DATETIME NULL,
  PRIMARY KEY (`data_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `budget`.`office_location`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `budget`.`office_location` (
  `office_id` INT NOT NULL AUTO_INCREMENT,
  `office_name` VARCHAR(45) NOT NULL,
  `office_remote` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`office_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `budget`.`project`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `budget`.`project` (
  `project_id` INT NOT NULL AUTO_INCREMENT,
  `project_name` VARCHAR(45) NOT NULL,
  `project_code` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`project_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `budget`.`team`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `budget`.`team` (
  `team_id` INT NOT NULL AUTO_INCREMENT,
  `team_name` VARCHAR(45) NOT NULL,
  `project_project_id` INT NOT NULL,
  PRIMARY KEY (`team_id`, `project_project_id`),
  INDEX `fk_team_project1_idx` (`project_project_id` ASC),
  CONSTRAINT `fk_team_project1`
    FOREIGN KEY (`project_project_id`)
    REFERENCES `budget`.`project` (`project_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `budget`.`line_items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `budget`.`line_items` (
  `item_id` INT NOT NULL AUTO_INCREMENT,
  `item_name` VARCHAR(45) NOT NULL,
  `category_category_id` INT NOT NULL,
  `subcategory_tags_subcategory_id` INT NOT NULL,
  `cost_reoccurance` TINYINT NOT NULL DEFAULT 'true',
  `cost_model` VARCHAR(45) NOT NULL DEFAULT 'yearly',
  `cost` VARCHAR(45) NOT NULL,
  `description` BLOB NULL,
  `large_data_data_id` INT NOT NULL,
  `office_location_office_id` INT NOT NULL,
  `archive` TINYINT NOT NULL DEFAULT 0,
  `team_team_id` INT NOT NULL,
  `project_project_id` INT NOT NULL,
  `creation_date` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`item_id`, `category_category_id`, `large_data_data_id`),
  INDEX `fk_line_items_category_idx` (`category_category_id` ASC),
  INDEX `fk_line_items_subcategory_tags1_idx` (`subcategory_tags_subcategory_id` ASC),
  INDEX `fk_line_items_large_data1_idx` (`large_data_data_id` ASC),
  INDEX `fk_line_items_office_location1_idx` (`office_location_office_id` ASC),
  INDEX `fk_line_items_team1_idx` (`team_team_id` ASC),
  INDEX `fk_line_items_project1_idx` (`project_project_id` ASC),
  CONSTRAINT `fk_line_items_category`
    FOREIGN KEY (`category_category_id`)
    REFERENCES `budget`.`category` (`category_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_line_items_subcategory_tags1`
    FOREIGN KEY (`subcategory_tags_subcategory_id`)
    REFERENCES `budget`.`subcategory_tags` (`subcategory_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_line_items_large_data1`
    FOREIGN KEY (`large_data_data_id`)
    REFERENCES `budget`.`large_data` (`data_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_line_items_office_location1`
    FOREIGN KEY (`office_location_office_id`)
    REFERENCES `budget`.`office_location` (`office_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_line_items_team1`
    FOREIGN KEY (`team_team_id`)
    REFERENCES `budget`.`team` (`team_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_line_items_project1`
    FOREIGN KEY (`project_project_id`)
    REFERENCES `budget`.`project` (`project_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `budget`.`department`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `budget`.`department` (
  `department_id` INT NOT NULL AUTO_INCREMENT,
  `department_name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`department_id`));


-- -----------------------------------------------------
-- Table `budget`.`company`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `budget`.`company` (
  `company_id` INT NOT NULL AUTO_INCREMENT,
  `company_name` VARCHAR(255) NOT NULL,
  `department_department_id` INT NOT NULL,
  PRIMARY KEY (`company_id`, `department_department_id`),
  INDEX `fk_company_department1_idx` (`department_department_id` ASC),
  CONSTRAINT `fk_company_department1`
    FOREIGN KEY (`department_department_id`)
    REFERENCES `budget`.`department` (`department_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
