from invoice2data import extract_data
from invoice2data.extract.loader import read_templates

templates = read_templates('./templates')

import argparse

if __name__ == '__main__':
    # Initialize the parser
    parser = argparse.ArgumentParser(
        description="Extract data from invoices"
    )

    # Add the parameters positional/optional
    parser.add_argument('-t','--templates_dir', help="Templates folder", type=float)
    parser.add_argument('-i','--invoice', help="Invoice file", type=float)

    # Parse the arguments
    args = parser.parse_args()
    print(args)
    result = None

    result = extract_data('./data/9.pdf', templates=templates)

    print("Result : ", result)