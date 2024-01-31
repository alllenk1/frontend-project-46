[![Actions Status](https://github.com/alllenk1/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/alllenk1/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/f317485112bbe5d860e3/maintainability)](https://codeclimate.com/github/alllenk1/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/f317485112bbe5d860e3/test_coverage)](https://codeclimate.com/github/alllenk1/frontend-project-46/test_coverage)

Gendiff is a command line utility that compares two files and prints the result.
Can work with JSON and YML. Outputs the result in three formats: stylish (default), plain and json.

### Install
Clone this repo: 
```
git clone https://github.com/alllenk1/frontend-project-46.git
```

Go to the project folder: 
```
cd frontend-project-46
```

Install package: 
```
make install
npm link
```

### Usage
To read help:
```
gendiff -h
```

To see version:
```
gendiff -V
```

To compare two files:
```
gendiff <path to file1> <path to file2>
```

To select the output format:
```
gendiff --format plain <path to file1> <path to file2>
```

### Examples

#### Help and version
[![asciicast](https://asciinema.org/a/634487.svg)](https://asciinema.org/a/634487)

#### Two JSON files with nested objects compare (stylish formatter)
[![asciicast](https://asciinema.org/a/634483.svg)](https://asciinema.org/a/634483)

#### Two YML files with nested objects compare (stylish formatter)
[![asciicast](https://asciinema.org/a/634484.svg)](https://asciinema.org/a/634484)

#### Plain formatter
[![asciicast](https://asciinema.org/a/634485.svg)](https://asciinema.org/a/634485)

#### JSON formatter
[![asciicast](https://asciinema.org/a/634486.svg)](https://asciinema.org/a/634486)
