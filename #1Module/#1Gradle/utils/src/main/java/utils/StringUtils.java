/*
 * This Java source file was generated by the Gradle 'init' task.
 */
package utils;


public class StringUtils {

	public static boolean isPositiveNumber(String str) throws NumberFormatException {

		int number = Integer.parseInt(str);
		if (number > 0) {
			return true;
		}
		return false;

	}

	public static boolean isAllPositiveNumbers(String... str) throws NumberFormatException {

		for(int i = 0; i < str.length; i++) {
			
			int num = Integer.parseInt(str[i]);
			
			if (num <= 0) {
				return false;
			}	
		}
		return true;

	}

}