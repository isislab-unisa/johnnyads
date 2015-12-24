package it.isislab.johnnyads;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;
import java.util.Map.Entry;

import weka.core.Attribute;
import weka.core.DenseInstance;
import weka.core.Instances;
import weka.core.converters.ArffSaver;


public class CleanNoTraceWeka {
	private static HashMap<String, HashMap<String, Double>> filesWordsMaps; // Each script has its own map containing words of the file together with their TF-IDF values
	private static HashMap<String, Double> allFilesWordsIdf; // All files words together with their IDF values
	private static final boolean 	TF										= true; // Whether the program has to calculate TF or TF-IDF index of the words
	private static final int		SPLIT_PERCENTAGE						= 80;
	private static final String 	DS_STORE								= "/Users/federicocozza/Desktop/.DS_Store"; // Used to solve a problem with documents counting
	
	// CSV VARIABLES
	
	private static final String DELIMITER 									= ",";
	private static final String NEW_LINE_SEPARATOR 							= "\n";
	
	
	
	
	private static FileWriter 	fileWriter									= null;
	private static FileWriter	genericWriter								= null;
	
	//OUTPUT CSV RESULTS
	private static String 		CSV_FILE_NAME								= "/Users/federicocozza/Desktop/Datasets/";
	
	// WEKA VARIABLES
	
	private static ArrayList<Attribute> 	atts 							= new ArrayList<Attribute>();
	private static ArrayList<String> 		attsVals 						= new ArrayList<String>();
	private static Instances 				data;
	private static double[]  				vals;
	private static final String INSTANCE_NAME								= "Script Analysis - Selected Words";
	
	//INPUT DIR
	private static final String AD_SCRIPTS_DIRECTORY						= "/Users/federicocozza/Desktop/scripts/analizzati-altrus";
	private static final String NORMAL_SCRIPTS_DIRECTORY					= "/Users/federicocozza/Desktop/scripts/analizzati-positivi";
	
	//DA ELIMINARE
	private static final String NEW_FOLDER_BUONICIOUS						= "/Users/federicocozza/Desktop/scripts/scartati-buonicious2/";
	private static final String NEW_FOLDER_ALTRUS							= "/Users/federicocozza/Desktop/scripts/scartati-altrus3/";
	
	
	//OUTPUT DIRs
	private static final String FULL_SET_ARFF_FILE 							= "/Users/federicocozza/Desktop/Datasets/";
	private static final String ARFF_FILE_SPLIT 							= "/Users/federicocozza/Desktop/Datasets/";
	
	// FEATURES
	/* ALL FEATURES */
	//private static String[]					customWords = {"src", "addEventListener", "script", "push", "replace", "getTime", "createElement", "appendChild", "cookie", "href", "split", "charAt", "concat", "indexOf", "slice", "match", "search", "substr", "substring", "abstract", "arguments", "boolean", "break", "byte", "case", "catch", "char", "class", "const", "continue", "debugger", "default", "delete", "do", "double", "else", "enum", "export", "extends", "false", "final", "finally", "float", "for", "goto", "if", "implements", "import", "in", "instanceof", "int", "interface", "let", "long", "native", "new", "null", "package", "private", "protected", "public", "return", "short", "static", "super", "switch", "synchronized", "this", "throw", "throws", "transient", "true", "try", "typeof", "var", "void", "volatile", "while", "with", "yield", "Array", "Date", "eval", "function", "hasOwnPropertyInfinity", "isFinite", "isNaN", "isPrototypeOf", "length", "Math", "NaN", "name", "Number", "Object", "prototype", "String", "toString", "undefined", "valueOf", "getClass", "java", "JavaArray", "javaClass", "JavaObject", "JavaPackage", "onblur", "onclick", "onerror", "onfocus", "onkeydown", "onkeypress", "onkeyup", "onmouseover", "onload", "onmouseup", "onmousedown", "onsubmit", "alert", "all", "anchor", "anchors", "areaassign", "blur", "button", "checkbox", "clearInterval", "clearTimeout", "clientInformation", "close", "closed", "confirm", "constructor", "crypto", "decodeURI", "decodeURIComponent", "defaultStatus", "document", "element", "elements", "embed", "embeds", "encodeURI", "encodeURIComponent", "escape", "event", "fileUpload", "focus", "form", "forms", "frame", "innerHeight", "innerWidth", "layer", "layers", "link", "location", "mimeTypes", "navigate", "navigator", "frames", "frameRate", "hidden", "history", "image", "images", "offscreenBuffering", "open", "opener", "option", "outerHeight", "outerWidth", "packages", "pageXOffset", "pageYOffset", "parent", "parseFloat", "parseInt", "password", "pkcs11", "plugin", "prompt", "propertyIsEnum", "radio", "reset", "screenX", "screenY", "scroll", "secure", "select", "self", "setInterval", "setTimeout", "status", "submit", "taint", "text", "textarea", "top", "unescape", "untaint", "window"};
	
	/* CUSTOM FEATURES*/
	//private static String[]					customWords = {"push", "replace", "location", "Date", "getTime", "createElement", "appendChild", "cookie", "setTimeout", "href", "split", "window", "charAt", "concat", "indexOf", "slice", "match", "search", "substr", "substring", "toString"};
	
	/* CUSTOM FEATURES*/
	//private static String[]					customWords = {"location", "href", "split", "splice", "replace", "cookie", "document", "window", "Date", "getTime", "XMLHttpRequest", "createElement", "appendChild"};
	
	/* JAVASCRIPT KEYWORDS*/
	//private static String[]					customWords	= {"abstract", "arguments", "boolean", "break", "byte", "case", "catch", "char", "class", "const", "continue", "debugger", "default", "delete", "do", "double", "else", "enum", "export", "extends", "false", "final", "finally", "float", "for", "goto", "if", "implements", "import", "in", "instanceof", "int", "interface", "let", "long", "native", "new", "null", "package", "private", "protected", "public", "return", "short", "static", "super", "switch", "synchronized", "this", "throw", "throws", "transient", "true", "try", "typeof", "var", "void", "volatile", "while", "with", "yield", "Array", "Date", "eval", "function", "hasOwnPropertyInfinity", "isFinite", "isNaN", "isPrototypeOf", "length", "Math", "NaN", "name", "Number", "Object", "prototype", "String", "toString", "undefined", "valueOf", "getClass", "java", "JavaArray", "javaClass", "JavaObject", "JavaPackage", "onblur", "onclick", "onerror", "onfocus", "onkeydown", "onkeypress", "onkeyup", "onmouseover", "onload", "onmouseup", "onmousedown", "onsubmit", "alert", "all", "anchor", "anchors", "areaassign", "blur", "button", "checkbox", "clearInterval", "clearTimeout", "clientInformation", "close", "closed", "confirm", "constructor", "crypto", "decodeURI", "decodeURIComponent", "defaultStatus", "document", "element", "elements", "embed", "embeds", "encodeURI", "encodeURIComponent", "escape", "event", "fileUpload", "focus", "form", "forms", "frame", "innerHeight", "innerWidth", "layer", "layers", "link", "location", "mimeTypes", "navigate", "navigator", "frames", "frameRate", "hidden", "history", "image", "images", "offscreenBuffering", "open", "opener", "option", "outerHeight", "outerWidth", "packages", "pageXOffset", "pageYOffset", "parent", "parseFloat", "parseInt", "password", "pkcs11", "plugin", "prompt", "propertyIsEnum", "radio", "reset", "screenX", "screenY", "scroll", "secure", "select", "self", "setInterval", "setTimeout", "status", "submit", "taint", "text", "textarea", "top", "unescape", "untaint", "window"};
	
	/* JAVASCRIPT SELECTED KEYWORDS + SELECTED CUSTOM FEATURES */
	//private static String[]					customWords	= {"arguments","break","catch","else","for","in","switch","try","typeof","var","Array","Date","length","Math","name","Object","toString","undefined","document","event","setTimeout","text","top", "push", "replace", "location", "getTime", "createElement", "appendChild", "cookie",  "href", "split", "window", "charAt", "concat",  "slice", "match", "search", "substr", "substring"};
	
	/* JAVASCRIPT SELECTED KEYWORDS + SELECTED CUSTOM FEATURES */
	//private static String[]					customWords	= {"createElement", "appendChild", "cookie", "abstract", "class", "extends", "package", "this", "true",
		//"while", "with", "function", "String", "document", "encodeURIComponent", "location", "frames", "images", "outerWidth", "reset", "select", "self", "unescape"};

	/* CUSTOM FEATURES + JAVASCRIPT KEYWORDS - AFTER SELECTION WITH ClassifierAttributeEval (RandomForest - Cross Validation 10 fold) - Ranker */
	private static String[]					customWords = {"src", "createElement", "script", "cookie", "appendChild", "this", "with", "encodeURIComponent", "location", "document", "default", "class", "option", "true", "element", "extends", "navigator", "onload", "while", "constructor"};
	
	public static void main(String[] args) throws Exception {
		File adScriptsDirectory, normalScriptsDirectory;
		File[] adScriptsList, normalScriptsList;
		ArffSaver saver = new ArffSaver();
		
		/* OPENING DIRECTORIES AND SAVING FILELIST */
		adScriptsDirectory = new File(AD_SCRIPTS_DIRECTORY);
		adScriptsList = adScriptsDirectory.listFiles();

		normalScriptsDirectory = new File(NORMAL_SCRIPTS_DIRECTORY);
		normalScriptsList = normalScriptsDirectory.listFiles();

		/* WEKA PARAMETERS INITIALIZATION */
		for (int i = 0, l = customWords.length; i < l; i++) { // Inserting custom words as attributes
			atts.add(new Attribute(customWords[i]));
		}

		// Creating values for the nominal attribute "Class" (whose values are "Malicious" or "Normal")
		attsVals.add("Malicious");
		attsVals.add("Normal");

		atts.add(new Attribute("Class", attsVals)); // Adding the class attribute to the list
		
		/* ANALYSIS */
		
		//generateSplittedDataset(adScriptsList, normalScriptsList);
		
		genericWriter = new FileWriter("/Users/federicocozza/Desktop/elementi.txt");
		
		fullSetGeneration(adScriptsList, normalScriptsList, saver);
		
		genericWriter.close();
	}

	private static void fullSetGeneration(File[] adScriptsList, File[] normalScriptsList, ArffSaver saver) throws IOException {
		String fileName;
		
		/* AD AND NORMAL SCRIPTS DATASETS MUST BE OF EQUAL SIZE! */
		double documentsNumber = (adScriptsList.length - 1) * 2; // -1 because of the presence of the .DS_Store file in the filelist
		
		data = new Instances(INSTANCE_NAME, atts, 0);
		
		allFilesWordsIdf = new HashMap<String, Double>();
		filesWordsMaps 	= new HashMap<String, HashMap<String,Double>>();
		
		CSV_FILE_NAME += ((int)(documentsNumber)) + "/dataset-";
		CSV_FILE_NAME += (TF) ? "TF.csv" : "TF_IDF.csv";
		
		fileWriter = new FileWriter(CSV_FILE_NAME);

		fileWriter.append(generateCSVFileHeader());
		
		generateDataset(adScriptsList, normalScriptsList);
		
		fileName = FULL_SET_ARFF_FILE + ((int)documentsNumber) + "/scripts-FULL_DATASET-" + ((int)(documentsNumber)) + "_INSTANCES-"; // Dinamically generating WEKA ARFF filename for full set
		fileName += (TF) ? "TF.arff" : "TF_IDF.arff";
		
		fileWriter.close();
		
		/*saver.setInstances(data);
		saver.setFile(new File(fileName));
		saver.writeBatch();*/
	}
	
	private static void generateSplittedDataset (File[] adScriptsList, File[] normalScriptsList) throws IOException {
		int file1DocumentsNumber = (SPLIT_PERCENTAGE * (adScriptsList.length + normalScriptsList.length - 2) / 100);
		
		data = new Instances(INSTANCE_NAME, atts, 0); // Resetting WEKA instance
		
		allFilesWordsIdf = new HashMap<String, Double>();
		filesWordsMaps 	= new HashMap<String, HashMap<String,Double>>();
		
		generateSplittedFile(adScriptsList, normalScriptsList, true, file1DocumentsNumber / 2 + 1, SPLIT_PERCENTAGE, 0); // +1 because of the .DS_Store file
		
		data = new Instances(INSTANCE_NAME, atts, 0); // Resetting WEKA instance
		
		allFilesWordsIdf = new HashMap<String, Double>();
		filesWordsMaps 	= new HashMap<String, HashMap<String,Double>>();
		
		generateSplittedFile(adScriptsList, normalScriptsList, false, adScriptsList.length - (file1DocumentsNumber / 2) - 1, 100 - SPLIT_PERCENTAGE, file1DocumentsNumber / 2 + 1);
		
	}

	private static void generateSplittedFile(File[] adScriptsList, File[] normalScriptsList, boolean firstFile, int documentsNumber, int percentage, int startIndex) throws IOException {
		File[] ad;
		File[] normal;
		ArffSaver saver = new ArffSaver();
		
		/* AD AND NORMAL SCRIPTS DATASETS MUST BE OF EQUAL SIZE! */
		
		// This is used to solve a problem about documentsNumber for calculating IDF value
		if (!firstFile) {
			documentsNumber++;
		}
		
		ad = new File[documentsNumber];
		normal = new File[documentsNumber];
		
		if (!firstFile) {
			ad[documentsNumber - 1] = normal[documentsNumber - 1] = new File(DS_STORE);
			documentsNumber--;
		}
		
		System.arraycopy(adScriptsList, startIndex, ad, 0, documentsNumber);
		System.arraycopy(normalScriptsList, startIndex, normal, 0, documentsNumber);
		
		generateDataset(ad, normal);
		
		String fileName = ARFF_FILE_SPLIT;
		fileName += (adScriptsList.length * 2 - 2) + "/scripts-SPLIT-" + SPLIT_PERCENTAGE + "_" + (100 - SPLIT_PERCENTAGE) + "-";
		fileName += ((int)(adScriptsList.length * 2 - 2)) + "_INSTANCES-";
		fileName += (TF) ? ("TF-" + percentage + ".arff") : ("TF_IDF-" + percentage + ".arff");
		
		saver.setInstances(data);
		saver.setFile(new File(fileName));
		saver.writeBatch();
	}
	
	private static void generateDataset(File[] adList, File[] normalList) throws IOException {
		HashMap<String, Double> featureSet = new HashMap<String, Double>(); // The map with selected features. Key: word - Value: TF-IDF index of the word
		double documentsNumber;
		
		/* 
		 * Documents number is needed to calculate the IDF index of each word.
		 * Beacuse of the .DS_Store file, we remove a file from the count.
		 * AD-List and Normal-List must be of equal size!
		 */
		documentsNumber = adList.length - 1;

		// Calculating TF values of the words of the script
		for (int i = 0; i < documentsNumber + 1; i++) { // +1 because of the presence of the .DS_Store file in the filelist
			tf(adList[i]);
			tf(normalList[i]);
		}

		// Calculating IDF values of the words of the scripts
		for (String s : allFilesWordsIdf.keySet()) {
			idf(s, documentsNumber * 2);
		}

		// Inserting selected features in the list, together with their IDF values
		for (int i = 0, l = customWords.length; i < l; i++) {
			featureSet.put(customWords[i], allFilesWordsIdf.get(customWords[i]));
		}
		
		generateCsvArff(featureSet, adList, true);
		generateCsvArff(featureSet, normalList, false);
	}
	
	private static String generateCSVFileHeader () {
		String fileHeader = "";
		
		for (int i = 0, l = customWords.length; i < l; i++) {
			fileHeader += customWords[i] + DELIMITER;
		}
		
		fileHeader += "label" + NEW_LINE_SEPARATOR;
		
		for (int i = 0, l = customWords.length; i < l; i++) {
			fileHeader += "real" + DELIMITER;
		}
		
		fileHeader += "feature_type";
		
		return fileHeader;
	}
	
	private static void generateCsvArff (HashMap<String, Double> featureSet, File[] fileList, boolean malicious) {
		String temp = ""; // Saving TF-IDF values of the script and writing them all at once
		HashMap<String, Double> tfMap; // The map associated to a file. It will contain TF values of the words of the file
		
		int documentsNumber = fileList.length - 1;
		
		try {
			genericWriter.append("[");
			for (int i = 0; i < documentsNumber + 1; i++) { // Generating file rows, plus WEKA instances
				if (fileList[i].getName().equals(".DS_Store")) {
					continue;
				}
				
				//genericWriter.append("[");
				
				temp = ""; // Buffer resetting
				tfMap = filesWordsMaps.get(fileList[i].getName());

				/* INSTANCES CREATION */
				vals = new double[data.numAttributes()];

				for (int j = 0, l = customWords.length; j < l; j++) { // Calculating TF-IDF (or TF, according to TF boolean variable) value, feature by feature
					String word = customWords[j];

					if (!tfMap.containsKey(word)) { // File not containing the word
						temp += "0";
						vals[data.attribute(word).index()] = 0.0;
					}
					else { // Word contained by the file => Calculating TF-IDF (or TF) value
						if (TF) {
							temp += tfMap.get(word);
							vals[data.attribute(word).index()] = tfMap.get(word);
						}
						else {
							if (Double.compare(tfMap.get(word) * allFilesWordsIdf.get(word), 0.0) == 0) {
								temp += "0";
								vals[data.attribute(word).index()] = 0.0;
							}
							else {
								temp += (tfMap.get(word) * allFilesWordsIdf.get(word));
								vals[data.attribute(word).index()] = (tfMap.get(word) * allFilesWordsIdf.get(word));
							}
						}
					}
					temp += DELIMITER;
				}
				
				// Checking if the file has at least on of the features with a TF-IDF (or TF) value greater than 0

				if (temp.matches("^(0" + DELIMITER + ")+0" + DELIMITER + "$")) { // File should not be added => Moving it to another directory
					if (malicious) {
						fileList[i].renameTo(new File(NEW_FOLDER_ALTRUS + fileList[i].getName()));
					}
					else {
						fileList[i].renameTo(new File(NEW_FOLDER_BUONICIOUS + fileList[i].getName()));
					}
					continue;
				}

				//genericWriter.append(temp.substring(0, temp.length() - 1)); // Need to get comma out
				
				if (malicious) {
					vals[data.attribute("Class").index()] = attsVals.indexOf("Malicious");
					temp += "\"Malicious\"";	
					
					genericWriter.append("-1,");
				}
				else {
					vals[data.attribute("Class").index()] = attsVals.indexOf("Normal");
					temp += "\"Normal\"";
					
					genericWriter.append("1,");
				}
				
				if (fileWriter != null) {
					fileWriter.append(NEW_LINE_SEPARATOR);
					fileWriter.append(temp);
				}
				//genericWriter.append("],\n");
				
				data.add(new DenseInstance(1.0, vals));
			}
			genericWriter.append("],\n");

		}

		catch (Exception error) {
			System.out.println("Error");
			error.printStackTrace();
		}

		finally {
			try {
				if (fileWriter != null) {
					fileWriter.flush();
					genericWriter.flush();
				}
			}
			catch (IOException error2) {
				System.out.println("Error2");
				error2.printStackTrace();
			}
		}
	}
	
	private static void tf (File file) throws IOException {
		FileReader reader = new FileReader(file);
		Scanner s = new Scanner(reader);
		HashMap<String, Double> jsWords = new HashMap<String, Double>();
		String delimiter = "[^A-Za-z0-9]";

		if (!file.getName().equals(".DS_Store")) {
			
			s.useDelimiter(delimiter);

			insertWordsInMap(s, jsWords);
			
			s.close();
			reader.close();
			
			/* Time to do the logarithm */
			for (Entry<String, Double> e : jsWords.entrySet()) {
				e.setValue(1 + Math.log10(e.getValue()));
			}

			filesWordsMaps.put(file.getName(), jsWords); // Adding script's map to the maps' container
		}
	}
	
	private static void insertWordsInMap(Scanner s, HashMap<String, Double> jsWords) {
		String word;
		
		while (s.hasNext()) {
			word = s.next();

			if (!jsWords.containsKey(word)) { // Never seen this word before
				jsWords.put(word, 0.0);
			}
			double temp = jsWords.get(word);
			jsWords.put(word, temp + 1.0); // Updating the number of occurences
			
			allFilesWordsIdf.put(word, 0.0); // Updating global dictionary
		}
	}
	
	private static void idf (String word, double documentsNumber) throws IOException {
		double documentOccurences = 0; // Number of documents in which the word appear
		double idfValue;

		for (Entry<String, HashMap<String, Double>> e : filesWordsMaps.entrySet()) {
			if (e.getValue().containsKey(word)) { // The document contains the word...
				documentOccurences++; // ...time to update the counter
			}
		}

		idfValue = Math.log10(documentsNumber / documentOccurences);
		allFilesWordsIdf.put(word, idfValue); // Saving IDF value of the word in the global dictionary
	}
}
