from invoice2data import extract_data
from invoice2data.extract.loader import read_templates

import argparse

if __name__ == '__main__':
    # Initialize the arguments parser
    parser = argparse.ArgumentParser(description="Extract data from invoices")

    # Add the parameters positional/optional
    parser.add_argument('-t','--templates_dirpath', help="Templates directory path", type=str)
    parser.add_argument('-i','--invoice_path', help="Invoice file path", type=str)

    # Parse the arguments
    args = parser.parse_args()

    templates = read_templates(args.templates_dirpath)

    json_data = extract_data(args.invoice_path, templates=templates)

    print(json_data)