import axios from "axios";

export const LANGUAGE_SNIPPETS = {
  java: `public class HelloWorld{\n\t public static void main(String[] Args){\n\t System.out.println("Hello World");\n}}\n`,
  cpp: `#include <iostream> \n\t int main(){\n\t cout<<"Hello world"; \n\n}`,
  python: `print("Hellooooo, lets code ")`,
};
export const Lang_ver = async () => {
  try {
    const res = await axios.get("https://emkc.org/api/v2/piston/runtimes");
    const versions = res.data;
console.log(versions);

    const LANGUAGE_VERSIONS = {
      java: versions[42].version,
      cpp: versions[32].version,
      python: versions[69].version,
    };
    console.log(LANGUAGE_VERSIONS)
    return LANGUAGE_VERSIONS
  } catch (error) {
    console.error("Error fetching languages:", error);
  }
};

