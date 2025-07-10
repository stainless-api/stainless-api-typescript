// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export type FileInput = FileInput.Content | FileInput.URL;

export namespace FileInput {
  export interface Content {
    /**
     * File content
     */
    content: string;
  }

  export interface URL {
    /**
     * URL to fetch file content from
     */
    url: string;
  }
}
